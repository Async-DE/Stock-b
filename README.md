# Stock Manager Backend - API de Gestión de Inventario

API REST construida con Node.js y Express para la gestión completa de inventarios, productos, ubicaciones, estantes y ventas. Incluye autenticación JWT, auditoría automática e integración AWS S3.

## Requisitos previos
- Node.js (v14 o superior)
- npm (gestor de paquetes de Node.js)
- PostgreSQL 12 o superior
- Variables de entorno configuradas (.env)

## Instalación
1. Clona el repositorio: `git clone <repo>`
2. Abre una terminal en la carpeta raíz
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Configura tu base de datos en `.env` (ver ejemplo en documentación Swagger)
5. Ejecuta las migraciones: `npx prisma migrate dev`

## Estructura del proyecto
- `index.js`: Punto de entrada de la aplicación
- `app/controllers/`: Lógica de negocio por módulo
- `app/routes/`: Definición de endpoints
- `app/middlewares/`: Autenticación y validaciones
- `app/bucket_service/`: Integración AWS S3
- `prisma/`: Esquema y migraciones de base de datos
- `app/Docs/`: Documentación Swagger

## Ejecución
Para iniciar el servidor:
```bash
npm start          # Servidor en puerto 3000
```

Para modo desarrollo con nodemon:
```bash
npm run dev        # Recarga automática en cambios
```

## Documentación de API
La documentación interactiva de los 29 endpoints disponibles está en:
```
http://localhost:3000/api-docs
```

Modelos disponibles:
- **Autenticación** (3 endpoints)
- **Usuarios** (3 endpoints)
- **Categorías & SubCategorías** (5 endpoints)
- **Productos & Variantes** (6 endpoints)
- **Ubicaciones & Estantes** (6 endpoints)
- **Ventas** (3 endpoints)
- **Auditoría** (3 endpoints)

## Características
- ✅ Autenticación JWT con tokens persistentes
- ✅ Sistema de auditoría automático (CREATE, UPDATE, VENTA, LOGIN)
- ✅ 11 modelos de base de datos en PostgreSQL
- ✅ Upload de imágenes a AWS S3
- ✅ Validaciones con express-validator
- ✅ Documentación Swagger OpenAPI 3.0.0

## Scripts Disponibles
```bash
npm start          # Inicia servidor producción
npm run dev        # Inicia con nodemon (desarrollo)
npm test           # Ejecutar tests
```
