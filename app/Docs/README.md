
---
# 📘 Documentación API — Stock Manager Backend v1.0.0

Este módulo contiene la **documentación oficial de la API backend** del sistema **Stock Manager**, utilizada como contrato de integración entre backend y frontend.

La documentación está definida usando **OpenAPI 3.0.0** y es consumida mediante **Swagger UI**.

🚀 **ESTADO ACTUAL**: API completamente terminada, entregada y aprobada por el cliente en versión 1.0.0 (18/02/2026)

---

## 🎯 Propósito

- Servir como **fuente única de verdad** para los endpoints disponibles
- Definir **estructuras de datos, tipos y validaciones**
- Facilitar la integración con la aplicación móvil (React Native)
- Documentar el comportamiento esperado de la API

> ⚠️ Swagger **NO se utiliza como herramienta de pruebas**.  
> Las pruebas manuales y técnicas se realizan con **Postman**.

---

## 🧱 Alcance de la Documentación

La documentación incluye **todos los módulos del backend** (30 endpoints totales):

- **Autenticación** (3 endpoints)
- **Usuarios** (3 endpoints)
- **Auditoría** (3 endpoints de consulta)
- **Categorías** (3 endpoints) ✅
- **Sub-Categorías** (2 endpoints) ✅
- **Productos** (6 endpoints)
- **Variantes** (integradas en Productos)
- **Ubicaciones** (3 endpoints)
- **Estantes** (3 endpoints)
- **Ventas** (3 endpoints)
- **Imágenes** (1 endpoint público)

✅ **Status:** Documentación completa para los 30 endpoints implementados

---

## 🔐 Sistema de Autenticación

**Tipo:** JWT (JSON Web Tokens)  
**Duración:** Sin expiración (persistente)  
**Almacenamiento:** Tabla `sesion` en PostgreSQL  
**Revocación:** Soportada via columna `revocado`

### Endpoints Públicos
- `POST /auth/login` → Obtiene JWT token
- `GET /imagenes/:carpeta/:archivo` → Sirve imágenes desde S3

### Endpoints Protegidos
- Los 28 endpoints restantes requieren:
  - Header: `Authorization: Bearer {token}`
  - JWT válido
  - Usuario activo
  - Token no revocado

---

## 📊 Sistema de Auditoría

**Cobertura:** 16 puntos de auditoría en todas las operaciones de datos

### Endpoints de Consulta
- `GET /stock/auditoria/general` → Últimos movimientos
- `GET /stock/auditoria/usuario/{id}` → Movimientos por usuario
- `GET /stock/auditoria/entidad/{entidad}/{id}` → Movimientos por entidad

### Acciones Registradas
- **CREATE** → Creación de registros (7 módulos)
- **UPDATE** → Actualización de registros (5 módulos)
- **VENTA** → Registros de venta (1 módulo)
- **LOGIN/LOGOUT** → Autenticación (2 operaciones)

---

## 🌐 Base URL

Todas las rutas documentadas asumen el siguiente prefijo base:

```

/stock

```

Ejemplo de endpoint completo:
```

POST /stock/usuarios/crear

```

---

## 📄 Archivo Principal

La documentación está centralizada en el archivo:

```

swagger.js

````

Este archivo contiene:
- Definición OpenAPI 3.0.0 completa
- 29 endpoints documentados
- Esquemas reutilizables (`components/schemas`)
- Ejemplos de requests y responses
- Tipos de datos alineados a Prisma
- Definiciones de seguridad (bearerAuth)

No se utilizan comentarios JSDoc en los controladores.

---

## ▶️ Acceso a Swagger UI

Con el servidor en ejecución:

```bash
npm start
````

Acceder a la documentación en:

```
http://localhost:3000/api-docs
```

---

## 🔗 Relación con el Backend

* Las rutas documentadas corresponden a los routers montados en `/stock`
* Las validaciones reales se implementan en los controladores (express-validator)
* Los esquemas están alineados con `schema.prisma`
* Swagger refleja el **contrato**, no la implementación interna

---

## 🧪 Pruebas

* Swagger UI: visualización y referencia de API
* Postman: pruebas manuales y técnicas (recomendado)
* Credentials: Usar Authorization tab con Bearer tokens de /auth/login

---

## 📝 Mantenimiento

Cualquier cambio en:

* Endpoints
* Estructura de datos
* Tipos o relaciones
* Seguridad/autenticación

Debe reflejarse **también** en este archivo para mantener la coherencia con el frontend.

---

## 📊 Estado Actual (Auditoría: 10 Feb 2026)

| Aspecto | Métrica | Status |
|---------|---------|--------|
| **Total Endpoints** | 30/30 | ✅ Completo |
| **Endpoints Documentados** | 30/30 | ✅ 100% Cobertura |
| **Endpoints Protegidos** | 28/30 | ✅ 93.3% |
| **Endpoints Públicos** | 2/30 | ✅ Login + Imágenes |
| **Puntos de Auditoría** | Múltiples | ✅ Completo |
| **Sistema de Auth** | JWT | ✅ Operacional |
| **Base de Datos** | 11 tablas | ✅ Relacional |
| **Swagger OpenAPI** | 3.0.0 | ✅ Actualizado |

---

**Versión**: 1.0.0  
**Última actualización**: 18/02/2026  
**Herramienta**: Swagger/OpenAPI 3.0  
**Estado**: ✅ ENTREGADO EN PRODUCCIÓN

---

📌 **Estado Final:**
✔ Documentación 100% completa para los 30 endpoints implementados.
✔ Sistema de autenticación JWT implementado y funcional.
✔ Sistema de auditoría completo en todas las operaciones.
✔ Base de datos relacional con 11 modelos.
✔ Esquemas de datos alineados con Prisma.
✔ Listo para integración con frontend (React Native).

---

## 💡 Notas de la Actualización Final (v1.0.0 - Producción)

### Cambios de la Versión 1.0.0 (Entregada al Cliente - 18/02/2026):

✅ **API completamente terminada y enviada a producción**
✅ **Swagger 100% alineado con la implementación actual**
✅ **Todos los 30 endpoints documentados y funcionando**
✅ **Sistema de autenticación JWT completamente operacional**
✅ **Sistema de auditoría completo en todas las operaciones**
✅ **Seguridad definida correctamente** en todos los endpoints protegidos
✅ **Base de datos relacional** con 11 modelos completamente funcional
✅ **Almacenamiento de imágenes en S3** integrado y operacional

**No hay cambios pendientes. La API está lista para producción.**

---
