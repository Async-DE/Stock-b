
---
# 📘 Documentación API — Stock Manager Backend

Este módulo contiene la **documentación oficial de la API backend** del sistema **Stock Manager**, utilizada como contrato de integración entre backend y frontend.

La documentación está definida usando **OpenAPI 3.0.0** y es consumida mediante **Swagger UI**.

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

La documentación incluye **todos los módulos del backend** (31 endpoints totales):

- **Autenticación** (3 endpoints)
- **Usuarios** (5 endpoints)
- **Auditoría** (2 endpoints de consulta)
- **Categorías** (3 endpoints) ✅
- **Sub-Categorías** (2 endpoints) ✅
- **Productos** (6 endpoints)
- **Variantes** (integradas en Productos)
- **Ubicaciones** (3 endpoints)
- **Estantes** (3 endpoints)
- **Ventas** (3 endpoints)

✅ **Status:** Documentación 100% completada - Todos los módulos incluidos

---

## 🔐 Sistema de Autenticación

**Tipo:** JWT (JSON Web Tokens)  
**Duración:** Sin expiración (persistente)  
**Almacenamiento:** Tabla `sesion` en PostgreSQL  
**Revocación:** Soportada via columna `revocado`

### Endpoints Públicos
- `POST /auth/login` → Obtiene JWT token

### Endpoints Protegidos
- Todos los demás (30/31 endpoints) requieren:
  - Header: `Authorization: Bearer {token}`
  - JWT válido
  - Usuario activo
  - Token no revocado

---

## 📊 Sistema de Auditoría

**Cobertura:** 16 puntos de auditoría en todas las operaciones de datos

### Endpoints de Consulta
- `GET /stock/usuarios/auditoria/general` → Últimos 20 movimientos
- `GET /stock/usuarios/auditoria/usuario/{id}` → Movimientos por usuario

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
- 31 endpoints documentados
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
http://localhost:3730/api-docs
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
| **Total Endpoints** | 31/31 | ✅ Completo |
| **Endpoints Documentados** | 31/31 | ✅ 100% Cobertura |
| **Endpoints Protegidos** | 30/31 | ✅ 96.8% |
| **Puntos de Auditoría** | 16/16 | ✅ Completo |
| **Sistema de Auth** | JWT | ✅ Operacional |
| **Base de Datos** | 12 tablas | ✅ Relacional |
| **Swagger OpenAPI** | 3.0.0 | ✅ Actualizado |

---

**Versión**: 1.1.0  
**Última actualización**: 10/02/2026  
**Herramienta**: Swagger/OpenAPI 3.0  
**Estado**: ✅ PRODUCCIÓN LISTA

---

📌 **Estado Final:**
✔ Documentación 100% completa para todos los módulos.
✔ Sistema de autenticación JWT implementado y funcional.
✔ Sistema de auditoría completo en todas las operaciones.
✔ Lista para integración con frontend (React Native).
✔ Deployable a producción.

---

**Para más detalles, consulta:** `AUDITORIA_BACKEND_COMPLETA.md` (auditoría completa del sistema)
