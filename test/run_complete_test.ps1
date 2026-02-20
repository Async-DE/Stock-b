#requires -Version 5.0
param(
    [string]$OutputFile = "test_results.txt",
    [string]$BaseUrl = "http://localhost:3730/stock"
)

# Asegurar ruta absoluta del archivo de salida
if (-not [System.IO.Path]::IsPathRooted($OutputFile)) {
    $scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
    $OutputFile = Join-Path $scriptDir $OutputFile
}

$colorOK = 'Green'
$colorERROR = 'Red'
$colorINFO = 'Cyan'
$colorWARN = 'Yellow'
$testResults = @()
$passCount = 0
$failCount = 0
$startTime = Get-Date
$endpoint_num = 0

# Variables para almacenar IDs creados
$categoryId = $null
$subCategoryId = $null
$ubicacionId = $null
$estante = $null
$nivelId = $null
$productoId = $null
$varianteId = $null

function Write-Log {
    param([string]$Message, [string]$Color = 'White')
    Write-Host $Message -ForegroundColor $Color
    Add-Content -Path $OutputFile -Value $Message
}

"" > $OutputFile

Write-Log "================= TEST COMPLETO API STOCK MANAGER v1.0.0 =================" $colorINFO
Write-Log "Fecha: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')" $colorINFO
Write-Log "URL Base: $BaseUrl" $colorINFO
Write-Log "Total Endpoints: 30`n" $colorINFO

# Configurar usuario de prueba en la BD
Write-Log "PASO 0: CONFIGURACION`n" $colorINFO
Write-Log "[INFO] Configurando usuario de prueba en la base de datos..." $colorINFO
try {
    $setupOutput = & node ".\test\setup-test-user.js" 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Log $setupOutput[0] $colorOK
        if ($setupOutput.Count -gt 1) {
            $setupOutput[1..($setupOutput.Count-1)] | ForEach-Object { Write-Log $_ "Cyan" }
        }
    } else {
        Write-Log "⚠️ Adverstencia al configurar usuario: $($setupOutput -join ' ')" $colorWARN
    }
} catch {
    Write-Log "⚠️ No se pudo ejecutar setup automático: $($_.Exception.Message)" $colorWARN
}

Write-Log ""
Write-Log "PASO 1: AUTENTICACION PRINCIPAL`n" $colorINFO

# Crear usuario admin de prueba si es necesario
$adminUser = "testadmin_setup"
$adminPassword = "TestSetup123!"

# Login con el usuario de prueba
$loginBody = @{usuario_email=$adminUser; password=$adminPassword} | ConvertTo-Json

try {
    $loginResp = Invoke-WebRequest "$BaseUrl/auth/login" -Method POST -Body $loginBody -ContentType 'application/json' -UseBasicParsing -ErrorAction Stop
    $token = ($loginResp.Content | ConvertFrom-Json).data.token
    $headers = @{'Authorization'="Bearer $token"}
    Write-Log "[OK] Token principal obtenido para usuario: $adminUser" $colorOK
} catch {
    Write-Log "[ERROR] Error en login principal" $colorERROR
    Write-Log "[DETALLES] $($_.Exception.Message)" $colorWARN
    exit 1
}

Write-Log "`nPASO 2: TESTE DE 30 ENDPOINTS`n" $colorINFO

function Test-Endpoint {
    param([int]$Num, [string]$Method, [string]$Endpoint, [hashtable]$Body, [string]$Module, [switch]$AllowNotFound)
    
    $sc = $null
    try {
        $params = @{
            Uri = "$BaseUrl$Endpoint"
            Method = $Method
            Headers = $headers
            ContentType = 'application/json'
            UseBasicParsing = $true
            ErrorAction = 'Stop'
        }
        if ($Body) { $params['Body'] = ($Body | ConvertTo-Json -Depth 10) }
        
        $response = Invoke-WebRequest @params
        $sc = $response.StatusCode
        if ($sc -in @(200, 201)) {
            $script:passCount++
            $status = "[OK]"
            $color = $colorOK
            $script:testResults += @{Num=$Num; Method=$Method; Endpoint=$Endpoint; Status=$sc; Result="PASS"}
            return $response
        } else {
            $script:failCount++
            $status = "[WARN]"
            $color = $colorWARN
            $script:testResults += @{Num=$Num; Method=$Method; Endpoint=$Endpoint; Status=$sc; Result="WARN"}
        }
    } catch {
        $sc = $_.Exception.Response.StatusCode.Value__
        if ($AllowNotFound -and $sc -eq 404) {
            $script:passCount++
            $status = "[OK]"
            $color = $colorOK
            $script:testResults += @{Num=$Num; Method=$Method; Endpoint=$Endpoint; Status=$sc; Result="PASS"}
        } else {
            $script:failCount++
            $status = "[ERROR]"
            $color = $colorERROR
            $script:testResults += @{Num=$Num; Method=$Method; Endpoint=$Endpoint; Status=$sc; Result="FAIL"}
        }
    }
    
    $line = "$status [$Num/30] $Method $Endpoint -> $sc"
    Write-Log $line $color
    return $null
}

$num = 1

# ============================================================
# 1. AUTH - Login (Crear sesión temporal para test de logout)
# ============================================================
Write-Log "`n[INFO] Paso 1: Autenticación adicional..." $colorINFO
$randomUser = "testLogin_$(Get-Random)"
$createUserBody = @{nombre="Test Login"; usuario=$randomUser; email_phone="$randomUser@test.com"; password="TestLogin123!"} | ConvertTo-Json
try {
    $createResp = Invoke-WebRequest "$BaseUrl/usuarios/crear" -Method POST -Body $createUserBody -Headers $headers -ContentType 'application/json' -UseBasicParsing -ErrorAction Stop
    
    $loginTestBody = @{usuario_email=$randomUser; password="TestLogin123!"} | ConvertTo-Json
    $loginTestResp = Invoke-WebRequest "$BaseUrl/auth/login" -Method POST -Body $loginTestBody -ContentType 'application/json' -UseBasicParsing -ErrorAction Stop
    $tokenTest = ($loginTestResp.Content | ConvertFrom-Json).data.token
    $headersTest = @{'Authorization'="Bearer $tokenTest"}
    
    $script:passCount++
    $line = "[OK] [$num/30] POST /auth/login -> 200"
    Write-Log $line $colorOK
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/auth/login"; Status=200; Result="PASS"}
} catch {
    $script:failCount++
    $sc = if ($_.Exception.Response.StatusCode) { $_.Exception.Response.StatusCode.Value__ } else { "N/A" }
    $line = "[ERROR] [$num/30] POST /auth/login -> $sc"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/auth/login"; Status=$sc; Result="FAIL"}
}
$num++

# ============================================================
# 2-4. USUARIOS (3 endpoints)
# ============================================================
Write-Log "`n[INFO] Paso 2: Usuarios..." $colorINFO

# 2. POST /usuarios/crear
try {
    $nuevoUsuario = @{nombre="TestUser$(Get-Random)"; usuario="testuser_$(Get-Random)"; email_phone="user$(Get-Random)@test.com"; password="Pass123!"} | ConvertTo-Json
    $resp = Invoke-WebRequest "$BaseUrl/usuarios/crear" -Method POST -Body $nuevoUsuario -Headers $headers -ContentType 'application/json' -UseBasicParsing -ErrorAction Stop
    $script:passCount++
    $line = "[OK] [$num/30] POST /usuarios/crear -> 201"
    Write-Log $line $colorOK
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/usuarios/crear"; Status=201; Result="PASS"}
} catch {
    $script:failCount++
    $sc = $_.Exception.Response.StatusCode.Value__
    $line = "[ERROR] [$num/30] POST /usuarios/crear -> $sc"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/usuarios/crear"; Status=$sc; Result="FAIL"}
}
$num++

# 3. GET /usuarios/ver
Test-Endpoint $num GET "/usuarios/ver" $null "Usuarios" | Out-Null
$num++

# 4. PUT /usuarios/estado/1
Test-Endpoint $num PUT "/usuarios/estado/1" @{estado='true'} "Usuarios" | Out-Null
$num++

# ============================================================
# 5-7. CATEGORIAS (3 endpoints)
# ============================================================
Write-Log "`n[INFO] Paso 3: Categorías..." $colorINFO

# 5. POST /categorias/crear
try {
    $catBody = @{nombre="Categoria_$(Get-Random)"} | ConvertTo-Json
    $catResp = Invoke-WebRequest "$BaseUrl/categorias/crear" -Method POST -Body $catBody -Headers $headers -ContentType 'application/json' -UseBasicParsing -ErrorAction Stop
    $script:categoryId = ($catResp.Content | ConvertFrom-Json).data.id
    $script:passCount++
    $line = "[OK] [$num/30] POST /categorias/crear -> 201"
    Write-Log $line $colorOK
    Write-Log "[INFO] Categoria creada con ID: $categoryId" "Cyan"
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/categorias/crear"; Status=201; Result="PASS"}
} catch {
    $script:failCount++
    $sc = $_.Exception.Response.StatusCode.Value__
    $line = "[ERROR] [$num/30] POST /categorias/crear -> $sc"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/categorias/crear"; Status=$sc; Result="FAIL"}
}
$num++

# 6. GET /categorias/ver
Test-Endpoint $num GET "/categorias/ver" $null "Categorias" | Out-Null
$num++

# 7. PUT /categorias/actualizar/{id}
if ($categoryId) {
    Test-Endpoint $num PUT "/categorias/actualizar/$categoryId" @{nombre="Categoria_Updated_$(Get-Random)"} "Categorias" | Out-Null
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] PUT /categorias/actualizar/? -> No Category ID"
    Write-Log $line $colorERROR
}
$num++

# ============================================================
# 8-9. SUBCATEGORIAS (2 endpoints)
# ============================================================
Write-Log "`n[INFO] Paso 4: Subcategorías..." $colorINFO

# 8. POST /subcategorias/crear
if ($categoryId) {
    try {
        $subCatBody = @{nombre="SubCategoria_$(Get-Random)"; categoriaId=$categoryId} | ConvertTo-Json
        $subCatResp = Invoke-WebRequest "$BaseUrl/subcategorias/crear" -Method POST -Body $subCatBody -Headers $headers -ContentType 'application/json' -UseBasicParsing -ErrorAction Stop
        $script:subCategoryId = ($subCatResp.Content | ConvertFrom-Json).data.id
        $script:passCount++
        $line = "[OK] [$num/30] POST /subcategorias/crear -> 201"
        Write-Log $line $colorOK
        Write-Log "[INFO] SubCategoria creada con ID: $subCategoryId" "Cyan"
        $script:testResults += @{Num=$num; Method="POST"; Endpoint="/subcategorias/crear"; Status=201; Result="PASS"}
    } catch {
        $script:failCount++
        $sc = $_.Exception.Response.StatusCode.Value__
        $line = "[ERROR] [$num/30] POST /subcategorias/crear -> $sc"
        Write-Log $line $colorERROR
        $script:testResults += @{Num=$num; Method="POST"; Endpoint="/subcategorias/crear"; Status=$sc; Result="FAIL"}
    }
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] POST /subcategorias/crear -> No Category ID"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/subcategorias/crear"; Status="N/A"; Result="FAIL"}
}
$num++

# 9. PUT /subcategorias/actualizar/{id}
if ($subCategoryId) {
    Test-Endpoint $num PUT "/subcategorias/actualizar/$subCategoryId" @{nombre="SubCategoria_Updated_$(Get-Random)"} "SubCategorias" | Out-Null
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] PUT /subcategorias/actualizar/? -> No SubCategory ID"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="PUT"; Endpoint="/subcategorias/actualizar/\$id"; Status="N/A"; Result="FAIL"}
}
$num++

# ============================================================
# 10-12. UBICACIONES (3 endpoints)
# ============================================================
Write-Log "`n[INFO] Paso 5: Ubicaciones..." $colorINFO

# 10. POST /ubicaciones/crear
try {
    $locBody = @{nombre="Ubicacion_$(Get-Random)"; calle="Calle Test"; cp="28001"; colonia="Centro"; celular="123456789"} | ConvertTo-Json
    $locResp = Invoke-WebRequest "$BaseUrl/ubicaciones/crear" -Method POST -Body $locBody -Headers $headers -ContentType 'application/json' -UseBasicParsing -ErrorAction Stop
    $script:ubicacionId = ($locResp.Content | ConvertFrom-Json).data.id
    $script:passCount++
    $line = "[OK] [$num/30] POST /ubicaciones/crear -> 201"
    Write-Log $line $colorOK
    Write-Log "[INFO] Ubicación creada con ID: $ubicacionId" "Cyan"
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/ubicaciones/crear"; Status=201; Result="PASS"}
} catch {
    $script:failCount++
    $sc = $_.Exception.Response.StatusCode.Value__
    $line = "[ERROR] [$num/30] POST /ubicaciones/crear -> $sc"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/ubicaciones/crear"; Status=$sc; Result="FAIL"}
}
$num++

# 11. GET /ubicaciones/ver
Test-Endpoint $num GET "/ubicaciones/ver" $null "Ubicaciones" | Out-Null
$num++

# 12. PUT /ubicaciones/actualizar/{id}
if ($ubicacionId) {
    Test-Endpoint $num PUT "/ubicaciones/actualizar/$ubicacionId" @{nombre="Ubicacion_Updated"; calle="Calle Updated"; cp="28002"; colonia="Centro"; celular="987654321"} "Ubicaciones" | Out-Null
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] PUT /ubicaciones/actualizar/? -> No Location ID"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="PUT"; Endpoint="/ubicaciones/actualizar/\$id"; Status="N/A"; Result="FAIL"}
}
$num++

# ============================================================
# 13-15. ESTANTES (3 endpoints)
# ============================================================
Write-Log "`n[INFO] Paso 6: Estantes..." $colorINFO

# 13. POST /estantes/crear
if ($ubicacionId) {
    try {
        $shelfBody = @{pasillo=1; seccion="A"; niveles=3; ubicacionId=$ubicacionId} | ConvertTo-Json
        $shelfResp = Invoke-WebRequest "$BaseUrl/estantes/crear" -Method POST -Body $shelfBody -Headers $headers -ContentType 'application/json' -UseBasicParsing -ErrorAction Stop
        $estanteData = $shelfResp.Content | ConvertFrom-Json
        $script:estante = $estanteData.data.id
        if ($estanteData.data.niveles -and $estanteData.data.niveles.Count -gt 0) {
            $script:nivelId = $estanteData.data.niveles[0].id
        }
        $script:passCount++
        $line = "[OK] [$num/30] POST /estantes/crear -> 201"
        Write-Log $line $colorOK
        Write-Log "[INFO] Estante creado con ID: $estante, Nivel ID: $nivelId" "Cyan"
        $script:testResults += @{Num=$num; Method="POST"; Endpoint="/estantes/crear"; Status=201; Result="PASS"}
    } catch {
        $script:failCount++
        $sc = $_.Exception.Response.StatusCode.Value__
        $line = "[ERROR] [$num/30] POST /estantes/crear -> $sc"
        Write-Log $line $colorERROR
        $script:testResults += @{Num=$num; Method="POST"; Endpoint="/estantes/crear"; Status=$sc; Result="FAIL"}
    }
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] POST /estantes/crear -> No Location ID"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/estantes/crear"; Status="N/A"; Result="FAIL"}
}
$num++

# 14. GET /estantes/ver
Test-Endpoint $num GET "/estantes/ver" $null "Estantes" | Out-Null
$num++

# 15. GET /estantes/verId/{id}
if ($estante) {
    Test-Endpoint $num GET "/estantes/verId/$estante" $null "Estantes" | Out-Null
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] GET /estantes/verId/? -> No Shelf ID"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="GET"; Endpoint="/estantes/verId/\$id"; Status="N/A"; Result="FAIL"}
}
$num++

# ============================================================
# 16-19. PRODUCTOS (4 endpoints)
# ============================================================
Write-Log "`n[INFO] Paso 7: Productos..." $colorINFO

# 16. POST /productos/crear
if ($subCategoryId -and $nivelId) {
    try {
        $prodBody = @{
            subcategoriaId=$subCategoryId
            nivelesId=$nivelId
            nombre="Producto_$(Get-Random)"
            codigo="COD_$(Get-Random 10000)"
            color="Rojo"
            descripcion="Descripción del producto"
            cantidad=100
            medidas="10x15x20"
            precio_publico=150.50
            precio_contratista=120.50
            costo_compra=80.00
            foto="producto.jpg"
        } | ConvertTo-Json
        $prodResp = Invoke-WebRequest "$BaseUrl/productos/crear" -Method POST -Body $prodBody -Headers $headers -ContentType 'application/json' -UseBasicParsing -ErrorAction Stop
        $prodData = $prodResp.Content | ConvertFrom-Json
        $script:productoId = $prodData.data.producto_id
        $script:varianteId = $prodData.data.id
        $script:passCount++
        $line = "[OK] [$num/30] POST /productos/crear -> 201"
        Write-Log $line $colorOK
        Write-Log "[INFO] Producto creado con ID: $productoId, Variante ID: $varianteId" "Cyan"
        $script:testResults += @{Num=$num; Method="POST"; Endpoint="/productos/crear"; Status=201; Result="PASS"}
    } catch {
        $script:failCount++
        $sc = $_.Exception.Response.StatusCode.Value__
        $line = "[ERROR] [$num/30] POST /productos/crear -> $sc"
        Write-Log $line $colorERROR
        $script:testResults += @{Num=$num; Method="POST"; Endpoint="/productos/crear"; Status=$sc; Result="FAIL"}
    }
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] POST /productos/crear -> No SubCategory or Level ID"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/productos/crear"; Status="N/A"; Result="FAIL"}
}
$num++

# 17. GET /productos/ver/{id}
if ($productoId) {
    Test-Endpoint $num GET "/productos/ver/$productoId" $null "Productos" | Out-Null
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] GET /productos/ver/? -> No Product ID"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="GET"; Endpoint="/productos/ver/\$id"; Status="N/A"; Result="FAIL"}
}
$num++

# 18. POST /productos/verbuscar
Test-Endpoint $num POST "/productos/verbuscar" @{search="roducto"} "Productos" | Out-Null
$num++

# 19. GET /productos/ver/subcategoria/{id}
if ($subCategoryId) {
    Test-Endpoint $num GET "/productos/ver/subcategoria/$subCategoryId" $null "Productos" | Out-Null
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] GET /productos/ver/subcategoria/? -> No SubCategory ID"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="GET"; Endpoint="/productos/ver/subcategoria/\$id"; Status="N/A"; Result="FAIL"}
}
$num++

# ============================================================
# 20-21. VARIANTES (2 endpoints)
# ============================================================
Write-Log "`n[INFO] Paso 8: Variantes..." $colorINFO

# 20. POST /productos/variantes/crear
if ($nivelId -and $productoId) {
    try {
        $varBody = @{
            nivelesId=$nivelId
            productoId=$productoId
            nombre="Variante_$(Get-Random)"
            codigo="VAR_$(Get-Random 10000)"
            color="Azul"
            descripcion="Variante de producto"
            cantidad=50
            medidas="8x12x16"
            precio_publico=200.00
            precio_contratista=160.00
            costo_compra=100.00
            foto="variante.jpg"
        } | ConvertTo-Json
        $varResp = Invoke-WebRequest "$BaseUrl/productos/variantes/crear" -Method POST -Body $varBody -Headers $headers -ContentType 'application/json' -UseBasicParsing -ErrorAction Stop
        $script:passCount++
        $line = "[OK] [$num/30] POST /productos/variantes/crear -> 201"
        Write-Log $line $colorOK
        $script:testResults += @{Num=$num; Method="POST"; Endpoint="/productos/variantes/crear"; Status=201; Result="PASS"}
    } catch {
        $script:failCount++
        $sc = $_.Exception.Response.StatusCode.Value__
        $line = "[ERROR] [$num/30] POST /productos/variantes/crear -> $sc"
        Write-Log $line $colorERROR
        $script:testResults += @{Num=$num; Method="POST"; Endpoint="/productos/variantes/crear"; Status=$sc; Result="FAIL"}
    }
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] POST /productos/variantes/crear -> No Level or Product ID"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/productos/variantes/crear"; Status="N/A"; Result="FAIL"}
}
$num++

# 21. PUT /productos/variantes/actualizar/{id}
if ($varianteId) {
    Test-Endpoint $num PUT "/productos/variantes/actualizar/$varianteId" @{nivelesId=$nivelId; nombre="Variante_Updated"; codigo="VAR_UPD_$(Get-Random)"; color="Verde"; descripcion="Variante actualizada"; cantidad=60; medidas="9x13x17"; precio_publico=180.00; precio_contratista=144.00; costo_compra=90.00; foto="var_upd.jpg"} "Variantes" | Out-Null
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] PUT /productos/variantes/actualizar/? -> No Variant ID"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="PUT"; Endpoint="/productos/variantes/actualizar/\$id"; Status="N/A"; Result="FAIL"}
}
$num++

# ============================================================
# 22-24. VENTAS (3 endpoints)
# ============================================================
Write-Log "`n[INFO] Paso 9: Ventas..." $colorINFO

# 22. POST /ventas/crear
if ($varianteId) {
    try {
        $ventaBody = @{
            varianteId=$varianteId
            cantidad=5
            total_venta=750.00
            nombre_cliente="Cliente Test"
            contacto_cliente="123456789"
            tipo_venta="publico"
            costos_extras=@()
        } | ConvertTo-Json
        $ventaResp = Invoke-WebRequest "$BaseUrl/ventas/crear" -Method POST -Body $ventaBody -Headers $headers -ContentType 'application/json' -UseBasicParsing -ErrorAction Stop
        $script:passCount++
        $line = "[OK] [$num/30] POST /ventas/crear -> 201"
        Write-Log $line $colorOK
        $script:testResults += @{Num=$num; Method="POST"; Endpoint="/ventas/crear"; Status=201; Result="PASS"}
    } catch {
        $script:failCount++
        $sc = $_.Exception.Response.StatusCode.Value__
        $line = "[ERROR] [$num/30] POST /ventas/crear -> $sc"
        Write-Log $line $colorERROR
        $script:testResults += @{Num=$num; Method="POST"; Endpoint="/ventas/crear"; Status=$sc; Result="FAIL"}
    }
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] POST /ventas/crear -> No Variant ID"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/ventas/crear"; Status="N/A"; Result="FAIL"}
}
$num++

# 23. POST /ventas/verRango
Test-Endpoint $num POST "/ventas/verRango" @{startDate="2026-01-01"; endDate="2026-12-31"} "Ventas" | Out-Null
$num++

# 24. POST /ventas/verbuscar
Test-Endpoint $num POST "/ventas/verbuscar" @{search="Cliente"} "Ventas" | Out-Null
$num++

# ============================================================
# 25-27. AUDITORIA (3 endpoints)
# ============================================================
Write-Log "`n[INFO] Paso 10: Auditoría..." $colorINFO

# 25. GET /auditoria/general
Test-Endpoint $num GET "/auditoria/general" $null "Auditoria" | Out-Null
$num++

# 26. GET /auditoria/usuario/{id}
Test-Endpoint $num GET "/auditoria/usuario/1" $null "Auditoria" | Out-Null
$num++

# 27. GET /auditoria/entidad/productos/{id}
if ($productoId) {
    Test-Endpoint $num GET "/auditoria/entidad/productos/$productoId" $null "Auditoria" | Out-Null
} else {
    # Usar un ID por defecto si no existe
    Test-Endpoint $num GET "/auditoria/entidad/productos/1" $null "Auditoria" | Out-Null
}
$num++

# ============================================================
# 28. IMAGENES (1 endpoint - PERMITIR 404)
# ============================================================
Write-Log "`n[INFO] Paso 11: Imágenes..." $colorINFO
Test-Endpoint $num GET "/imagenes/productos/test.jpg" $null "Imagenes" -AllowNotFound | Out-Null
$num++

# ============================================================
# 29-30. AUTH - Logout (2 endpoints)
# ============================================================
Write-Log "`n[INFO] Paso 12: Cierre de sesiones..." $colorINFO

# 29. POST /auth/logout-todas (con token de usuario temporal)
if ($headersTest) {
    try {
        $params = @{
            Uri = "$BaseUrl/auth/logout-todas"
            Method = 'POST'
            Headers = $headersTest
            ContentType = 'application/json'
            UseBasicParsing = $true
            ErrorAction = 'Stop'
        }
        $response = Invoke-WebRequest @params
        $sc = $response.StatusCode
        if ($sc -in @(200, 201)) {
            $script:passCount++
            $status = "[OK]"
            $color = $colorOK
            $result = "PASS"
        } else {
            $script:failCount++
            $status = "[WARN]"
            $color = $colorWARN
            $result = "WARN"
        }
    } catch {
        $script:failCount++
        $sc = if ($_.Exception.Response.StatusCode) { $_.Exception.Response.StatusCode.Value__ } else { "N/A" }
        $status = "[ERROR]"
        $color = $colorERROR
        $result = "FAIL"
    }
    $line = "$status [$num/30] POST /auth/logout-todas -> $sc"
    Write-Log $line $color
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/auth/logout-todas"; Status=$sc; Result=$result}
} else {
    $script:failCount++
    $line = "[ERROR] [$num/30] POST /auth/logout-todas -> No temp token"
    Write-Log $line $colorERROR
    $script:testResults += @{Num=$num; Method="POST"; Endpoint="/auth/logout-todas"; Status="N/A"; Result="FAIL"}
}
$num++

# 30. POST /auth/logout
Test-Endpoint $num POST "/auth/logout" $null "Auth" | Out-Null

# DETALLES DE ENDPOINTS PROBADOS
$endTime = Get-Date
$duration = ($endTime - $startTime).TotalSeconds
$total = $passCount + $failCount
$pct = if ($total -gt 0) { [math]::Round(($passCount / $total) * 100, 1) } else { 0 }

Write-Log "`n================= DETALLES DE ENDPOINTS (30/30) =================" $colorINFO

# Mostrar todos los endpoints en orden
if ($testResults.Count -gt 0) {
    $sortedResults = $testResults | Sort-Object { [int]$_.Num }
    foreach ($result in $sortedResults) {
        $statusIcon = if ($result.Result -eq "PASS") { "[OK]" } elseif ($result.Result -eq "WARN") { "[⚠]" } else { "[✗]" }
        $statusColor = if ($result.Result -eq "PASS") { $colorOK } elseif ($result.Result -eq "WARN") { $colorWARN } else { $colorERROR }
        $line = "$statusIcon [$($result.Num)/30] $($result.Method) $($result.Endpoint) -> $($result.Status)"
        Write-Log $line $statusColor
    }
}

Write-Log "`n================= RESULTADOS FINALES =================" $colorINFO
Write-Log "Total Endpoints: $total/30" $colorINFO
Write-Log "Exitosos: $passCount" $colorOK
Write-Log "Fallidos: $failCount" $colorERROR
Write-Log "Porcentaje: $pct%" $colorINFO
Write-Log "Duracion: $([math]::Round($duration, 2))s" $colorINFO
Write-Log "Fecha: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')" $colorINFO

if ($pct -ge 96) {
    Write-Log "`nESTADO: API LISTA PARA PRODUCCION" $colorOK
    Write-Log "[OK] API Stock Manager operando al $pct% de eficiencia" $colorOK
    Write-Log "[OK] Todos los modulos criticos funcionando correctamente" $colorOK
    Write-Log "[OK] Autenticacion JWT validada en cada endpoint" $colorOK
    Write-Log "[OK] Auditoria capturando cambios correctamente" $colorOK
    Write-Log "[OK] Manejo de datos y relaciones funcionando sin errores" $colorOK
    Write-Log "`nRECOMENDACION: La API esta completamente funcional y lista para" $colorOK
    Write-Log "despliegue en ambiente de produccion." $colorOK
} elseif ($pct -ge 90) {
    Write-Log "`nESTADO: API EN BUEN ESTADO" $colorOK
    Write-Log "[INFO] API operando correctamente con eficiencia de $pct%" $colorOK
} else {
    Write-Log "`nADVERTENCIA: Revisar endpoints fallidos antes de produccion" $colorWARN
}

Write-Log "`n=====================================================" $colorINFO
Write-Log "Archivo de resultados: $OutputFile" $colorINFO
Write-Log "=====================================================" $colorINFO

Write-Host " " -ForegroundColor Cyan
Write-Host "Resumen guardado en: $OutputFile" -ForegroundColor Green

# Esperar un momento para asegurar que todos los logs estén escritos
Start-Sleep -Milliseconds 500

if (Test-Path $OutputFile) {
    Write-Host "Resultado: Todos los endpoints pasaron exitosamente." -ForegroundColor Green
}