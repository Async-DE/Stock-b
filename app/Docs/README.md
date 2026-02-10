
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

La documentación incluye los siguientes módulos:

- **Usuarios**
- **Auditoría**
- **Productos**
- **Variantes**
- **Ubicaciones**
- **Ventas**
- **Estantes**

🔸 El módulo **Categorías** queda pendiente de documentación y no forma parte del alcance actual.

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
- Definición OpenAPI 3.0.0
- Endpoints (`paths`)
- Esquemas reutilizables (`components/schemas`)
- Ejemplos de requests y responses
- Tipos de datos alineados a Prisma

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

* Swagger UI: solo visualización y referencia
* Postman: pruebas manuales y técnicas
* No se garantiza que todos los endpoints funcionen desde Swagger UI

---

## 📝 Mantenimiento

Cualquier cambio en:

* Endpoints
* Estructura de datos
* Tipos o relaciones

Debe reflejarse **también** en este archivo para mantener la coherencia con el frontend.



---
**Versión**: 1.0.0  
**Última actualización**: 07/02/2026  
**Herramienta**: Swagger/OpenAPI 3.0

---

📌 **Estado actual:**
✔ Documentación completa y validada para integración frontend.
✔ Lista para uso en entorno de desarrollo.
* Pendiente documentar categorias despues de ajustes.
