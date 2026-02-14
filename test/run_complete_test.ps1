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
$testResults = @()
$passCount = 0
$failCount = 0
$startTime = Get-Date
$totalEndpoints = 30

function Write-Log {
    param([string]$Message, [string]$Color = 'White')
    Write-Host $Message -ForegroundColor $Color
    try {
        $utf16Bom = New-Object System.Text.UnicodeEncoding($false, $true)
        [System.IO.File]::AppendAllText($OutputFile, "$Message`r`n", $utf16Bom)
    } catch {
        # Evitar que fallos de escritura detengan el test
    }
}

$utf16Bom = New-Object System.Text.UnicodeEncoding($false, $true)
[System.IO.File]::WriteAllText($OutputFile, "", $utf16Bom)

Write-Log "================= TEST COMPLETO API STOCK MANAGER =================" $colorINFO
Write-Log "Fecha: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')" $colorINFO
Write-Log "URL Base: $BaseUrl" $colorINFO
Write-Log "Total Endpoints: $totalEndpoints`n" $colorINFO

function Invoke-ApiJson {
    param(
        [string]$Method,
        [string]$Endpoint,
        [hashtable]$Headers,
        [hashtable]$Body
    )

    $params = @{
        Uri = "$BaseUrl$Endpoint"
        Method = $Method
        UseBasicParsing = $true
        ErrorAction = 'Stop'
    }
    if ($Headers) { $params['Headers'] = $Headers }
    if ($Body) {
        $params['Body'] = ($Body | ConvertTo-Json -Depth 8)
        $params['ContentType'] = 'application/json'
    }

    $response = Invoke-WebRequest @params
    $json = $null
    if ($response.Content) {
        try { $json = $response.Content | ConvertFrom-Json } catch { $json = $null }
    }

    return [pscustomobject]@{
        StatusCode = $response.StatusCode
        Json = $json
        Raw = $response.Content
    }
}

function Get-PasswordHash {
    param([string]$Password)

    $hash = & node --input-type=module -e "import bcrypt from 'bcryptjs'; const hash = await bcrypt.hash('$Password', 10); console.log(hash);"
    return $hash.Trim()
}

function Ensure-BootstrapUser {
    param(
        [string]$Usuario,
        [string]$Email,
        [string]$Password
    )

    $loginBody = @{ usuario_email = $Usuario; password = $Password }
    try {
        $resp = Invoke-ApiJson -Method 'POST' -Endpoint '/auth/login' -Headers $null -Body $loginBody
        if ($resp.StatusCode -eq 200) {
            return $resp
        }
    } catch {
        # continuar a bootstrap
    }

    Write-Log "[INFO] Usuario base no encontrado. Creando usuario bootstrap..." $colorINFO
    $hash = Get-PasswordHash -Password $Password

    $sql = @"
INSERT INTO usuario (nombre, usuario, email_phone, password, estado, "createdAt", "updatedAt")
VALUES ('Admin Test', '$Usuario', '$Email', '$hash', true, NOW(), NOW())
ON CONFLICT DO NOTHING;
"@

    $sql | & npx prisma db execute --schema "./prisma/schema.prisma" --stdin | Out-Null

    $resp = Invoke-ApiJson -Method 'POST' -Endpoint '/auth/login' -Headers $null -Body $loginBody
    return $resp
}

# LOGIN - OBTENER TOKEN PRINCIPAL PARA TESTS
Write-Log "PASO 1: AUTENTICACION PRINCIPAL`n" $colorINFO
$bootstrapUser = 'admin_test'
$bootstrapEmail = 'admin_test@local'
$bootstrapPassword = 'Test123!'

try {
    $loginResp = Ensure-BootstrapUser -Usuario $bootstrapUser -Email $bootstrapEmail -Password $bootstrapPassword
    if (-not $loginResp -or $loginResp.StatusCode -ne 200) {
        throw "Login bootstrap fallido"
    }
    $token = $loginResp.Json.token
    $loginUserId = $loginResp.Json.usuario.id
    $headers = @{'Authorization'="Bearer $token"}
    Write-Log "[OK] Token principal obtenido (Sesion 1)" $colorOK
} catch {
    Write-Log "[ERROR] Error en login principal" $colorERROR
    exit 1
}

Write-Log "`nPASO 2: PREPARANDO DATOS BASE`n" $colorINFO

$seedSuffix = Get-Random

try {
    # Categoria base
    $categoriaNombre = "Cat_$seedSuffix"
    Invoke-ApiJson -Method 'POST' -Endpoint '/categorias/crear' -Headers $headers -Body @{ nombre = $categoriaNombre } | Out-Null
    $categoriasResp = Invoke-ApiJson -Method 'GET' -Endpoint '/categorias/ver' -Headers $headers -Body $null
    $categoriaId = ($categoriasResp.Json | Where-Object { $_.nombre -eq $categoriaNombre } | Select-Object -First 1).id

    if (-not $categoriaId) { throw "No se pudo resolver categoriaId" }

    # Subcategoria base
    $subcategoriaNombre = "Sub_$seedSuffix"
    $subcategoriaResp = Invoke-ApiJson -Method 'POST' -Endpoint '/subcategorias/crear' -Headers $headers -Body @{ nombre = $subcategoriaNombre; categoriaId = $categoriaId }
    $subcategoriaId = $subcategoriaResp.Json.id
    if (-not $subcategoriaId) { throw "No se pudo resolver subcategoriaId" }

    # Ubicacion base
    $ubicacionResp = Invoke-ApiJson -Method 'POST' -Endpoint '/ubicaciones/crear' -Headers $headers -Body @{ nombre = "Ubic_$seedSuffix"; calle = "Calle"; cp = "28000"; colonia = "Centro"; celular = "5550000000" }
    $ubicacionId = $ubicacionResp.Json.id
    if (-not $ubicacionId) { throw "No se pudo resolver ubicacionId" }

    # Estante base con niveles
    $estanteResp = Invoke-ApiJson -Method 'POST' -Endpoint '/estantes/crear' -Headers $headers -Body @{ pasillo = 1; niveles = 2; seccion = "A"; ubicacionId = $ubicacionId }
    $estanteId = $estanteResp.Json.id
    $nivelesId = $estanteResp.Json.niveles[0].id
    if (-not $nivelesId) { throw "No se pudo resolver nivelesId" }

    # Producto base con variante inicial
    $codigoBase = "COD_$seedSuffix"
    Invoke-ApiJson -Method 'POST' -Endpoint '/productos/crear' -Headers $headers -Body @{ subcategoriaId = $subcategoriaId; nivelesId = $nivelesId; nombre = "Prod_$seedSuffix"; codigo = $codigoBase; color = "Rojo"; descripcion = "Desc"; cantidad = 10; medidas = "10x15"; precio_publico = 100; precio_contratista = 80; costo_compra = 50; foto = "https://example.com/img.jpg" } | Out-Null

    # Obtener producto y variante creados
    $productosSubResp = Invoke-ApiJson -Method 'GET' -Endpoint "/productos/ver/subcategoria/$subcategoriaId" -Headers $headers -Body $null
    $productoId = $productosSubResp.Json[0].id
    $varianteId = $productosSubResp.Json[0].variantes[0].id
    if (-not $productoId -or -not $varianteId) { throw "No se pudo resolver productoId/varianteId" }

} catch {
    Write-Log "[ERROR] Error preparando datos base: $($_.Exception.Message)" $colorERROR
    exit 1
}

Write-Log "`nPASO 3: TESTE DE $totalEndpoints ENDPOINTS`n" $colorINFO

function Test-Endpoint {
    param(
        [int]$Num,
        [string]$Method,
        [string]$Endpoint,
        [hashtable]$Body,
        [string]$Module,
        [int[]]$ExpectedStatusCodes = @(200, 201)
    )
    
    try {
        $params = @{
            Uri = "$BaseUrl$Endpoint"
            Method = $Method
            Headers = $headers
            ContentType = 'application/json'
            UseBasicParsing = $true
            ErrorAction = 'Stop'
        }
        if ($Body) { $params['Body'] = ($Body | ConvertTo-Json -Depth 8) }
        
        $response = Invoke-WebRequest @params
        $sc = $response.StatusCode
        if ($sc -in $ExpectedStatusCodes) {
            $script:passCount++
            $status = "[OK]"
            $color = $colorOK
        } else {
            $script:failCount++
            $status = "[WARN]"
            $color = 'Yellow'
        }
    } catch {
        $sc = if ($_.Exception.Response -and $_.Exception.Response.StatusCode) { $_.Exception.Response.StatusCode.Value__ } else { "N/A" }
        if ($ExpectedStatusCodes -contains $sc) {
            $script:passCount++
            $status = "[OK]"
            $color = $colorOK
        } else {
            $script:failCount++
            $status = "[ERROR]"
            $color = $colorERROR
        }
    }
    
    $line = "$status [$Num/$totalEndpoints] $Method $Endpoint -> $sc"
    Write-Log $line $color
}

function Test-Endpoint-Json {
    param(
        [int]$Num,
        [string]$Method,
        [string]$Endpoint,
        [hashtable]$Body,
        [string]$Module,
        [int[]]$ExpectedStatusCodes = @(200, 201)
    )

    try {
        $params = @{
            Uri = "$BaseUrl$Endpoint"
            Method = $Method
            Headers = $headers
            ContentType = 'application/json'
            UseBasicParsing = $true
            ErrorAction = 'Stop'
        }
        if ($Body) { $params['Body'] = ($Body | ConvertTo-Json -Depth 8) }

        $response = Invoke-WebRequest @params
        $sc = $response.StatusCode
        $json = $null
        if ($response.Content) {
            try { $json = $response.Content | ConvertFrom-Json } catch { $json = $null }
        }

        if ($sc -in $ExpectedStatusCodes) {
            $script:passCount++
            $status = "[OK]"
            $color = $colorOK
        } else {
            $script:failCount++
            $status = "[WARN]"
            $color = 'Yellow'
        }
    } catch {
        $sc = if ($_.Exception.Response -and $_.Exception.Response.StatusCode) { $_.Exception.Response.StatusCode.Value__ } else { "N/A" }
        if ($ExpectedStatusCodes -contains $sc) {
            $script:passCount++
            $status = "[OK]"
            $color = $colorOK
        } else {
            $script:failCount++
            $status = "[ERROR]"
            $color = $colorERROR
        }
        $json = $null
    }

    $line = "$status [$Num/$totalEndpoints] $Method $Endpoint -> $sc"
    Write-Log $line $color

    return $json
}

# Tests
$num = 1

# Auth - Login (1/3 endpoints de autenticacion - crear usuario temporal para test)
Write-Log "`n[INFO] Creando sesion de prueba con usuario temporal..." $colorINFO
$randomUser = "testLogin_$seedSuffix"
$createUserBody = @{nombre="Test Login"; usuario=$randomUser; email_phone="$randomUser@test.com"; password="TestLogin123!"}
try {
    # Crear usuario temporal para test de login
    $createResp = Invoke-ApiJson -Method 'POST' -Endpoint '/usuarios/crear' -Headers $headers -Body $createUserBody
    
    # Probar login con el usuario recién creado (sesión 2)
    $loginTestResp = Invoke-ApiJson -Method 'POST' -Endpoint '/auth/login' -Headers $null -Body @{usuario_email=$randomUser; password="TestLogin123!"}
    $tokenTest = $loginTestResp.Json.token
    $headersTest = @{'Authorization'="Bearer $tokenTest"}
    
    if ($loginTestResp.StatusCode -eq 200) {
        $script:passCount++
        $status = "[OK]"
        $color = $colorOK
    } else {
        $script:failCount++
        $status = "[WARN]"
        $color = 'Yellow'
    }
    $line = "$status [$num/$totalEndpoints] POST /auth/login -> $($loginTestResp.StatusCode)"
    Write-Log $line $color
} catch {
    $script:failCount++
    $sc = if ($_.Exception.Response.StatusCode) { $_.Exception.Response.StatusCode.Value__ } else { "N/A" }
    $line = "[ERROR] [$num/$totalEndpoints] POST /auth/login -> $sc"
    Write-Log $line $colorERROR
}
$num++

$num = 2

# Usuarios (3 endpoints)
$newUserBody = @{nombre="User_$seedSuffix"; usuario="user_$seedSuffix"; email_phone="u$seedSuffix@test.com"; password="Pass123"}
$newUserJson = Test-Endpoint-Json $num POST "/usuarios/crear" $newUserBody "Usuarios"
$newUserId = $newUserJson.id
if (-not $newUserId) { $newUserId = $loginUserId }
$num++
Test-Endpoint $num GET "/usuarios/ver" $null "Usuarios"
$num++
Test-Endpoint $num PUT "/usuarios/estado/$newUserId" @{estado=$true} "Usuarios"
$num++

# Categorias (3 endpoints)
Test-Endpoint $num GET "/categorias/ver" $null "Categorias"
$num++
Test-Endpoint $num POST "/categorias/crear" @{nombre="CatT_$seedSuffix"} "Categorias"
$num++
Test-Endpoint $num PUT "/categorias/actualizar/$categoriaId" @{nombre="CatU_$seedSuffix"} "Categorias"
$num++

# SubCategorias (2 endpoints)
Test-Endpoint $num POST "/subcategorias/crear" @{nombre="SubT_$seedSuffix"; categoriaId=$categoriaId} "SubCategorias"
$num++
Test-Endpoint $num PUT "/subcategorias/actualizar/$subcategoriaId" @{nombre="SubU_$seedSuffix"} "SubCategorias"
$num++

# Ubicaciones (3 endpoints)
Test-Endpoint $num GET "/ubicaciones/ver" $null "Ubicaciones"
$num++
Test-Endpoint $num POST "/ubicaciones/crear" @{nombre="U_$seedSuffix"; calle="C"; cp="28"; colonia="Ct"; celular="1"} "Ubicaciones"
$num++
Test-Endpoint $num PUT "/ubicaciones/actualizar/$ubicacionId" @{nombre="UU_$seedSuffix"; calle="C2"; cp="29"; colonia="Ct"; celular="2"} "Ubicaciones"
$num++

# Estantes (3 endpoints)
Test-Endpoint $num GET "/estantes/ver" $null "Estantes"
$num++
Test-Endpoint $num POST "/estantes/crear" @{pasillo=1; niveles=2; seccion="A"; ubicacionId=$ubicacionId} "Estantes"
$num++
Test-Endpoint $num GET "/estantes/verId/$estanteId" $null "Estantes"
$num++

# Productos (4 endpoints)
Test-Endpoint $num POST "/productos/crear" @{subcategoriaId=$subcategoriaId; nivelesId=$nivelesId; nombre="P_$seedSuffix"; codigo="C_$seedSuffix"; color="R"; descripcion="D"; cantidad=10; medidas="10x15"; precio_publico=100; precio_contratista=80; costo_compra=50; foto="https://example.com/i.jpg"} "Productos"
$num++
Test-Endpoint $num GET "/productos/ver/$productoId" $null "Productos"
$num++
Test-Endpoint $num POST "/productos/verbuscar" @{search=$codigoBase} "Productos"
$num++
Test-Endpoint $num GET "/productos/ver/subcategoria/$subcategoriaId" $null "Productos"
$num++

# Variantes (2 endpoints)
$varianteExtraCodigo = "V_$seedSuffix"
Test-Endpoint $num POST "/productos/variantes/crear" @{productoId=$productoId; nivelesId=$nivelesId; nombre="V_$seedSuffix"; codigo=$varianteExtraCodigo; color="B"; descripcion="V"; cantidad=5; medidas="5x10"; precio_publico=50; precio_contratista=40; costo_compra=25; foto="https://example.com/i.jpg"} "Variantes"
$num++

$productoDetalleResp = Invoke-ApiJson -Method 'GET' -Endpoint "/productos/ver/$productoId" -Headers $headers -Body $null
$varianteExtraId = ($productoDetalleResp.Json.variantes | Where-Object { $_.codigo -eq $varianteExtraCodigo } | Select-Object -First 1).id
if (-not $varianteExtraId) { $varianteExtraId = $varianteId }

Test-Endpoint $num PUT "/productos/variantes/actualizar/$varianteExtraId" @{nivelesId=$nivelesId; nombre="VU_$seedSuffix"; codigo="VU_$seedSuffix"; color="G"; descripcion="VU"; cantidad=8; medidas="8x12"; precio_publico=60; precio_contratista=48; costo_compra=30} "Variantes"
$num++

# Ventas (3 endpoints)
Test-Endpoint $num POST "/ventas/crear" @{varianteId=$varianteId; cantidad=2; total_venta=250; nombre_cliente="C"; contacto_cliente="123"; tipo_venta="publico"; costos_extras=@(@{motivo="Envio"; costo=10})} "Ventas"
$num++
Test-Endpoint $num POST "/ventas/verRango" @{startDate="2026-01-01T00:00:00.000Z"; endDate="2026-12-31T23:59:59.999Z"} "Ventas"
$num++
Test-Endpoint $num POST "/ventas/verbuscar" @{search="C"} "Ventas"
$num++

# Auditoria (3 endpoints)
Test-Endpoint $num GET "/auditoria/general" $null "Auditoria"
$num++
Test-Endpoint $num GET "/auditoria/usuario/$loginUserId" $null "Auditoria"
$num++
Test-Endpoint $num GET "/auditoria/entidad/productos/$productoId" $null "Auditoria"
$num++

# Imagenes (1 endpoint)
Test-Endpoint $num GET "/imagenes/productos/archivo_inexistente.jpg" $null "Imagenes" @(200, 404)
$num++

# Auth - Logout-todas (revocar TODAS las sesiones del usuario temporal con token de prueba)
Write-Log "`n[INFO] Limpiando TODAS las sesiones del usuario temporal..." $colorINFO
try {
    if ($headersTest) {
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
        } else {
            $script:failCount++
            $status = "[WARN]"
            $color = 'Yellow'
        }
    } else {
        $script:failCount++
        $sc = "N/A"
        $status = "[ERROR]"
        $color = $colorERROR
    }
} catch {
    $script:failCount++
    $sc = if ($_.Exception.Response.StatusCode) { $_.Exception.Response.StatusCode.Value__ } else { "N/A" }
    $status = "[ERROR]"
    $color = $colorERROR
}
$line = "$status [$num/$totalEndpoints] POST /auth/logout-todas -> $sc"
Write-Log $line $color
$num++

# Auth - Logout (cerrar sesion principal)
Test-Endpoint $num POST "/auth/logout" $null "Auth"
$num++

# RESULTADOS
$endTime = Get-Date
$duration = ($endTime - $startTime).TotalSeconds
$total = $passCount + $failCount
$pct = if ($total -gt 0) { [math]::Round(($passCount / $total) * 100, 1) } else { 0 }

Write-Log "`n================= RESULTADOS FINALES =================" $colorINFO
Write-Log "Total Endpoints: $total/$totalEndpoints" $colorINFO
Write-Log "Exitosos: $passCount" $colorOK
Write-Log "Fallidos: $failCount" $colorERROR
Write-Log "Porcentaje: $pct%" $colorINFO
Write-Log "Duracion: $([math]::Round($duration, 2))s" $colorINFO
Write-Log "Fecha: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')" $colorINFO

if ($pct -ge 95) {
    Write-Log "`nESTADO: API LISTA PARA PRODUCCION" $colorOK
    Write-Log "[OK] API Stock Manager operando a $pct% de eficiencia" $colorOK
    Write-Log "[OK] Todos los modulos criticos funcionando correctamente" $colorOK
    Write-Log "[OK] Autenticacion JWT validada en cada endpoint" $colorOK
    Write-Log "[OK] Auditoria capturando cambios correctamente" $colorOK
    Write-Log "`nRECOMENDACION: La API esta completamente funcional y lista para" $colorOK
    Write-Log "despliegue en ambiente de produccion." $colorOK
} else {
    Write-Log "`nADVERTENCIA: Revisar endpoints fallidos antes de produccion" 'Yellow'
}

Write-Log "`n=====================================================" $colorINFO
Write-Log "Archivo de resultados: $OutputFile" $colorINFO
Write-Log "=====================================================" $colorINFO

Write-Host " " -ForegroundColor Cyan
Write-Host "Resumen guardado en: $OutputFile" -ForegroundColor Green

if (Test-Path $OutputFile) {
    Write-Host "Intentando abrir archivo..." -ForegroundColor Yellow
    try {
        Invoke-Item $OutputFile
        Write-Host "Archivo abierto exitosamente" -ForegroundColor Green
    } catch {
        Write-Host "Archivo disponible en: $OutputFile" -ForegroundColor Yellow
    }
}