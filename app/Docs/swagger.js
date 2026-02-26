import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",

  info: {
    title: "Stock Manager API",
    version: "1.0.0",
    description: `
🚀 **VERSIÓN 1.0.0 - ENTREGADA EN PRODUCCIÓN**

API backend para control de inventarios, productos, usuarios y ventas.
Versión completamente terminada, entregada y aprobada por el cliente.

- Todas las peticiones y respuestas son en JSON
- Todas las acciones generan auditoría
- Pensada para consumo por aplicación móvil (React Native)
- **Base URL**: \`/stock\`
- **Estado**: ✅ PRODUCCIÓN - 18/02/2026
    `,
  },

  servers: [
    {
      url: "http://localhost:3000/stock",
      description: "Servidor local (desarrollo)",
    },
    {
      url: "https://stock-b-production.up.railway.app/stock",
      description: "Servidor de producción ✅ Entregado",
    },
  ],

  tags: [
    {
      name: "Autenticación",
      description: "Endpoints de login y logout con JWT",
    },
    {
      name: "Usuarios",
      description: "Gestión de usuarios y estados",
    },
    {
      name: "Auditoría",
      description:
        "Sistema de auditoría automático que registra todas las operaciones (CREATE, UPDATE, VENTA, LOGIN, LOGOUT). Permite consultar el historial completo del sistema, por usuario o por entidad específica. Soporta paginación con parámetros ?take= (max 100) y ?skip=.",
    },
    {
      name: "Productos",
      description: "Gestión de productos y variantes",
    },
    {
      name: "Categorías",
      description: "Gestión de categorías de productos",
    },
    {
      name: "SubCategorías",
      description: "Gestión de subcategorías dentro de categorías",
    },
    {
      name: "Ubicaciones",
      description: "Gestión de ubicaciones físicas",
    },
    {
      name: "Ventas",
      description: "Registro y consulta de ventas",
    },
    {
      name: "Estantes",
      description: "Gestión de estantes de almacenamiento",
    },
    {
      name: "Imágenes",
      description: "Servicio de imágenes desde S3",
    },
  ],

  paths: {
    /* ============================
       AUTENTICACIÓN
    ============================ */

    "/auth/login": {
      post: {
        tags: ["Autenticación"],
        summary: "Iniciar sesión",
        description:
          "Autentica un usuario con su usuario/email-teléfono y contraseña. Retorna un token JWT sin expiración.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Login",
              },
              example: {
                usuario_email: "usuario123",
                password: "micontraseña",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Login exitoso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoginResponse",
                },
              },
            },
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          401: {
            description: "Credenciales inválidas",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example: "Usuario o contraseña incorrectos",
                    },
                  },
                },
              },
            },
          },
          403: {
            description: "Usuario inactivo",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example: "Usuario inactivo",
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/auth/logout": {
      post: {
        tags: ["Autenticación"],
        summary: "Cerrar sesión",
        description: "Revoca la sesión actual. Requiere token JWT válido.",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Logout exitoso",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    mensaje: {
                      type: "string",
                      example: "Logout exitoso",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Token inválido o expirado",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/auth/logout-todas": {
      post: {
        tags: ["Autenticación"],
        summary: "Revocar todas las sesiones",
        description:
          "Revoca todas las sesiones activas del usuario actual. Útil después de cambio de contraseña.",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Todas las sesiones revocadas",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    mensaje: {
                      type: "string",
                      example: "Todas las sesiones han sido revocadas",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Token inválido o expirado",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    /* ============================
       USUARIOS
    ============================ */

    "/usuarios/crear": {
      post: {
        tags: ["Usuarios"],
        summary: "Crear usuario",
        description: "Crea un nuevo usuario activo en el sistema",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateUsuario",
              },
              example: {
                nombre: "Juan Pérez",
                usuario: "juanp",
                email_phone: "juan@email.com",
                password: "123456",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Usuario creado correctamente",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Usuario",
                },
              },
            },
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/usuarios/estado/{id}": {
      put: {
        tags: ["Usuarios"],
        summary: "Actualizar estado del usuario",
        description: "Activa o desactiva un usuario",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID del usuario",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdateEstadoUsuario",
              },
              example: {
                estado: true,
              },
            },
          },
        },
        responses: {
          200: {
            description: "Estado actualizado correctamente",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Usuario",
                },
              },
            },
          },
          400: {
            description: "Error de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/usuarios/ver": {
      get: {
        tags: ["Usuarios"],
        summary: "Obtener usuarios",
        description:
          "Obtiene la lista de usuarios, opcionalmente filtrados por estado",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "estado",
            in: "query",
            required: false,
            schema: { type: "boolean" },
            description: "Filtrar por estado activo/inactivo (true/false)",
          },
        ],
        responses: {
          200: {
            description: "Lista de usuarios",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Usuario",
                  },
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    /* ============================
       AUDITORÍA
    ============================ */

    "/auditoria/general": {
      get: {
        tags: ["Auditoría"],
        summary: "Auditoría general del sistema",
        description:
          "Obtiene el historial completo de todas las operaciones realizadas en el sistema (CREATE, UPDATE, VENTA, LOGIN, LOGOUT). Incluye información del usuario que realizó la acción y las entidades afectadas. Por defecto retorna las últimas 20 operaciones, pero soporta paginación con parámetros ?take= y ?skip=",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "take",
            in: "query",
            required: false,
            schema: {
              type: "integer",
              minimum: 1,
              maximum: 100,
              default: 20,
            },
            description: "Número de registros a retornar (máximo 100)",
          },
          {
            name: "skip",
            in: "query",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
              default: 0,
            },
            description: "Número de registros a omitir (para paginación)",
          },
        ],
        responses: {
          200: {
            description: "Lista de auditoría",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Auditoria",
                  },
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/auditoria/usuario/{id}": {
      get: {
        tags: ["Auditoría"],
        summary: "Auditoría por usuario específico",
        description:
          "Obtiene el historial de todas las operaciones realizadas por un usuario en particular. Útil para auditorías de seguridad o revisión de acciones de empleados. Soporta paginación.",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID del usuario a consultar",
          },
          {
            name: "take",
            in: "query",
            required: false,
            schema: {
              type: "integer",
              minimum: 1,
              maximum: 100,
              default: 20,
            },
            description: "Número de registros a retornar (máximo 100)",
          },
          {
            name: "skip",
            in: "query",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
              default: 0,
            },
            description: "Número de registros a omitir (para paginación)",
          },
        ],
        responses: {
          200: {
            description: "Auditoría del usuario",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Auditoria",
                  },
                },
              },
            },
          },
          400: {
            description: "ID de usuario inválido",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example: "ID de usuario inválido",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Token inválido o expirado",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/auditoria/entidad/{entidad}/{id}": {
      get: {
        tags: ["Auditoría"],
        summary: "Auditoría por tipo de entidad e ID",
        description: `Obtiene el historial de operaciones filtrado por tipo de entidad y su ID. 
        
**Entidades soportadas:**
- **categorias**: Historial de cambios en categorías
- **subcategorias**: Historial de cambios en subcategorías  
- **productos**: Historial de cambios en productos
- **variantes**: Historial de cambios en variantes de productos
- **ventas**: Historial de ventas realizadas
- **estantes**: Historial de cambios en estantes
- **ubicaciones**: Historial de cambios en ubicaciones

**Casos de uso:**
- Rastrear todos los cambios en una categoría específica
- Ver historial completo de un producto (creación, actualizaciones)
- Auditar todas las ventas de una variante
- Revisar modificaciones en configuración de estantes

Soporta paginación con ?take= y ?skip=`,
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "entidad",
            in: "path",
            required: true,
            schema: {
              type: "string",
              enum: [
                "categorias",
                "subcategorias",
                "productos",
                "variantes",
                "ventas",
                "estantes",
                "ubicaciones",
              ],
            },
            description: "Tipo de entidad a consultar",
            example: "productos",
          },
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID de la entidad específica",
            example: 1,
          },
          {
            name: "take",
            in: "query",
            required: false,
            schema: {
              type: "integer",
              minimum: 1,
              maximum: 100,
              default: 20,
            },
            description: "Número de registros a retornar (máximo 100)",
          },
          {
            name: "skip",
            in: "query",
            required: false,
            schema: {
              type: "integer",
              minimum: 0,
              default: 0,
            },
            description: "Número de registros a omitir (para paginación)",
          },
        ],
        responses: {
          200: {
            description: "Auditoría de la entidad consultada",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Auditoria",
                  },
                },
                examples: {
                  categoria: {
                    summary: "Ejemplo: Auditoría de categoría",
                    value: [
                      {
                        id: 15,
                        accion: "CREATE",
                        createdAt: "2026-02-10T08:15:30.000Z",
                        usuario: {
                          id: 1,
                          nombre: "Admin Usuario",
                          usuario: "admin",
                        },
                        categoria: {
                          id: 1,
                          nombre: "Electrodomésticos",
                        },
                      },
                      {
                        id: 28,
                        accion: "UPDATE",
                        createdAt: "2026-02-10T10:22:15.000Z",
                        usuario: {
                          id: 2,
                          nombre: "Juan Pérez",
                          usuario: "juanp",
                        },
                        categoria: {
                          id: 1,
                          nombre: "Electrodomésticos Premium",
                        },
                      },
                    ],
                  },
                  producto: {
                    summary: "Ejemplo: Auditoría de producto",
                    value: [
                      {
                        id: 42,
                        accion: "CREATE",
                        createdAt: "2026-02-09T14:30:00.000Z",
                        usuario: {
                          id: 1,
                          nombre: "Admin Usuario",
                          usuario: "admin",
                        },
                        producto: {
                          id: 5,
                          nombre: "Refrigerador Samsung",
                        },
                      },
                    ],
                  },
                  venta: {
                    summary: "Ejemplo: Auditoría de venta",
                    value: [
                      {
                        id: 89,
                        accion: "VENTA",
                        createdAt: "2026-02-10T16:45:00.000Z",
                        usuario: {
                          id: 3,
                          nombre: "María López",
                          usuario: "marialop",
                        },
                        venta: {
                          id: 12,
                          total_venta: 15500.0,
                          nombre_cliente: "Carlos González",
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
          400: {
            description: "Entidad no válida o ID inválido",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example:
                        "Entidad no válida. Usa: categorias, subcategorias, productos, variantes, ventas, estantes, ubicaciones",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Token inválido o expirado",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    /* ============================
    PRODUCTOS
    ============================ */

    "/productos/crear": {
      post: {
        tags: ["Productos"],
        summary: "Crear producto con variante base",
        description:
          "Crea un producto y su variante inicial en una sola operación. La foto puede enviarse como URL en el body o como archivo multipart/form-data.",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateProductoConVariante",
              },
              example: {
                subcategoriaId: 1,
                ubi_alma_id: 5,
                nombre: "Tornillo Phillips",
                codigo: "TOR-PH-001",
                color: "Plateado",
                descripcion: "Tornillo Phillips 1/4 x 2 pulgadas",
                cantidad: 500,
                alto: 0.25,
                ancho: 0.5,
                largo: 2,
                precio_publico: 1.5,
                precio_contratista: 1.2,
                costo_compra: 0.8,
                foto: "https://ejemplo.com/tornillo.jpg",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Producto y variante creados con éxito",
            content: {
              "application/json": {
                schema: {
                  type: "string",
                  example: "Producto y variante básica creados con éxito",
                },
              },
            },
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/productos/ver/{id}": {
      get: {
        tags: ["Productos"],
        summary: "Obtener producto por ID",
        description: "Obtiene un producto con todas sus variantes",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID del producto",
          },
        ],
        responses: {
          200: {
            description: "Producto encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductoDetalle",
                },
              },
            },
          },
          404: {
            description: "Producto no encontrado",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/productos/verbuscar": {
      post: {
        tags: ["Productos"],
        summary: "Buscar productos",
        description:
          "Busca productos por categoría, nombre de variante, color o código",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["search"],
                properties: {
                  search: {
                    type: "string",
                    description: "Término de búsqueda",
                    example: "tornillo",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Resultados de búsqueda",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/ProductoResumen",
                  },
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/productos/ver/subcategoria/{subcategoriaId}": {
      get: {
        tags: ["Productos"],
        summary: "Productos por subcategoría",
        description:
          "Obtiene todos los productos de una subcategoría específica",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "subcategoriaId",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID de la subcategoría",
          },
        ],
        responses: {
          200: {
            description: "Lista de productos por subcategoría",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/ProductoResumen",
                  },
                },
              },
            },
          },
          404: {
            description: "No se encontraron productos para esta subcategoría",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    /* ============================
    VARIANTES
    ============================ */

    "/productos/variantes/crear": {
      post: {
        tags: ["Productos"],
        summary: "Crear variante adicional",
        description:
          "Crea una nueva variante para un producto existente. La foto puede enviarse como URL o archivo multipart/form-data.",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateVariante",
              },
              example: {
                ubi_alma_id: 5,
                productoId: 123,
                nombre: "Variante ejemplo",
                codigo: "VAR-001",
                color: "Azul",
                descripcion: "Variante de muestra",
                cantidad: 50,
                alto: 2.5,
                ancho: 1.5,
                largo: 0.75,
                precio_publico: 200.0,
                precio_contratista: 160.0,
                costo_compra: 100.0,
                foto: "https://ejemplo.com/variante.jpg",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Variante creada con éxito",
            content: {
              "application/json": {
                schema: {
                  type: "string",
                  example: "Variante creada con éxito",
                },
              },
            },
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/productos/variantes/actualizar/{varianteId}": {
      put: {
        tags: ["Productos"],
        summary: "Actualizar variante",
        description:
          "Actualiza los datos de una variante existente. La foto puede enviarse como URL o archivo multipart/form-data.",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "varianteId",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID de la variante",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdateVariante",
              },
              example: {
                ubi_alma_id: 5,
                nombre: "Variante modificada",
                codigo: "VAR-002",
                color: "Verde",
                descripcion: "Actualización parcial",
                cantidad: 60,
                alto: 3.0,
                ancho: 2.0,
                largo: 1.0,
                precio_publico: 220.0,
                precio_contratista: 176.0,
                costo_compra: 110.0,
                foto: "https://ejemplo.com/variante2.jpg",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Variante actualizada con éxito",
            content: {
              "application/json": {
                schema: {
                  type: "string",
                  example: "Variante actualizada con éxito",
                },
              },
            },
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    /* ============================
    UBICACIONES
    ============================ */

    "/ubicaciones/crear": {
      post: {
        tags: ["Ubicaciones"],
        summary: "Crear ubicación",
        description: "Crea una nueva ubicación física",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateUbicacion",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Ubicación creada con éxito",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Ubicacion",
                },
              },
            },
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/ubicaciones/actualizar/{id}": {
      put: {
        tags: ["Ubicaciones"],
        summary: "Actualizar ubicación",
        description: "Actualiza los datos de una ubicación existente",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID de la ubicación",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateUbicacion",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Ubicación actualizada con éxito",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Ubicacion",
                },
              },
            },
          },
          404: {
            description: "Ubicación no encontrada",
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/ubicaciones/ver": {
      get: {
        tags: ["Ubicaciones"],
        summary: "Obtener ubicaciones",
        description: "Obtiene todas las ubicaciones registradas",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Lista de ubicaciones",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Ubicacion",
                  },
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    /* ============================
    VENTAS
    ============================ */

    "/ventas/crear": {
      post: {
        tags: ["Ventas"],
        summary: "Registrar venta",
        description: "Registra una nueva venta de una variante",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateVenta",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Venta creada",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Venta",
                },
              },
            },
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          404: {
            description: "Variante no encontrada",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/ventas/verRango": {
      post: {
        tags: ["Ventas"],
        summary: "Ventas por rango de fechas",
        description: "Obtiene ventas dentro de un rango de fechas específico",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["startDate", "endDate"],
                properties: {
                  startDate: {
                    type: "string",
                    format: "date-time",
                    description: "Fecha inicial (ISO 8601)",
                    example: "2024-01-01T00:00:00.000Z",
                  },
                  endDate: {
                    type: "string",
                    format: "date-time",
                    description: "Fecha final (ISO 8601)",
                    example: "2024-12-31T23:59:59.999Z",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Ventas encontradas",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Venta",
                  },
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/ventas/verbuscar": {
      post: {
        tags: ["Ventas"],
        summary: "Buscar ventas",
        description: "Busca ventas por nombre o contacto del cliente",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["search"],
                properties: {
                  search: {
                    type: "string",
                    description: "Término de búsqueda",
                    example: "Juan Pérez",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Ventas encontradas",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Venta",
                  },
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    /* ============================
    CATEGORÍAS
    ============================ */

    "/categorias/crear": {
      post: {
        tags: ["Categorías"],
        summary: "Crear categoría",
        description: "Crea una nueva categoría de productos",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateCategoria",
              },
              example: {
                nombre: "Electrónica",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Categoría creada con éxito",
            content: {
              "application/json": {
                schema: {
                  type: "string",
                  example: "Categoría creada con éxito",
                },
              },
            },
          },
          400: {
            description: "Errores de validación o categoría duplicada",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          401: {
            description: "No autorizado (token requerido)",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/categorias/ver": {
      get: {
        tags: ["Categorías"],
        summary: "Obtener categorías",
        description:
          "Obtiene la lista de todas las categorías con sus subcategorías",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Lista de categorías",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Categoria",
                  },
                },
              },
            },
          },
          401: {
            description: "No autorizado (token requerido)",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/categorias/actualizar/{id}": {
      put: {
        tags: ["Categorías"],
        summary: "Actualizar categoría",
        description: "Actualiza el nombre de una categoría existente",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID de la categoría a actualizar",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateCategoria",
              },
              example: {
                nombre: "Electrónica Avanzada",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Categoría actualizada con éxito",
            content: {
              "application/json": {
                schema: {
                  type: "string",
                  example: "Categoría actualizada con éxito",
                },
              },
            },
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          401: {
            description: "No autorizado (token requerido)",
          },
          404: {
            description: "Categoría no encontrada",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    /* ============================
    SUBCATEGORÍAS
    ============================ */

    "/subcategorias/crear": {
      post: {
        tags: ["SubCategorías"],
        summary: "Crear subcategoría",
        description: "Crea una nueva subcategoría asociada a una categoría",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateSubCategoria",
              },
              example: {
                nombre: "Celulares",
                categoriaId: 1,
              },
            },
          },
        },
        responses: {
          201: {
            description: "Subcategoría creada con éxito",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SubCategoria",
                },
              },
            },
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          401: {
            description: "No autorizado (token requerido)",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/subcategorias/actualizar/{id}": {
      put: {
        tags: ["SubCategorías"],
        summary: "Actualizar subcategoría",
        description: "Actualiza el nombre de una subcategoría existente",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID de la subcategoría a actualizar",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateSubCategoria",
              },
              example: {
                nombre: "Celulares Inteligentes",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Subcategoría actualizada con éxito",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SubCategoria",
                },
              },
            },
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          401: {
            description: "No autorizado (token requerido)",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    /* ============================
    IMÁGENES
    ============================ */

    "/imagenes/{carpeta}/{archivo}": {
      get: {
        tags: ["Imágenes"],
        summary: "Obtener imagen desde S3",
        description:
          "Sirve imágenes almacenadas en S3. Este endpoint es público y se usa para mostrar las fotos de productos en la aplicación.",
        parameters: [
          {
            name: "carpeta",
            in: "path",
            required: true,
            schema: { type: "string" },
            description:
              "Carpeta donde está almacenada la imagen (ej: productos)",
            example: "productos",
          },
          {
            name: "archivo",
            in: "path",
            required: true,
            schema: { type: "string" },
            description: "Nombre del archivo de imagen",
            example: "1234567890-123456789.jpg",
          },
        ],
        responses: {
          200: {
            description: "Imagen encontrada",
            content: {
              "image/jpeg": {
                schema: {
                  type: "string",
                  format: "binary",
                },
              },
              "image/png": {
                schema: {
                  type: "string",
                  format: "binary",
                },
              },
            },
          },
          404: {
            description: "Imagen no encontrada",
            content: {
              "text/plain": {
                example: "Imagen no encontrada",
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    /* ============================
    ESTANTES
    ============================ */

    "/estantes/crear": {
      post: {
        tags: ["Estantes"],
        summary: "Crear estante",
        description:
          "Crea un nuevo estante asociado opcionalmente a una ubicación",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateEstante",
              },
              example: {
                pasillo: 1,
                seccion: "A",
                niveles: 3,
                ubicacionId: 3,
              },
            },
          },
        },
        responses: {
          201: {
            description: "Estante creado con éxito",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Estante",
                },
              },
            },
          },
          400: {
            description: "Errores de validación",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ValidationError",
                },
              },
            },
          },
          404: {
            description: "Ubicación no encontrada",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/estantes/ver": {
      get: {
        tags: ["Estantes"],
        summary: "Obtener estantes",
        description: "Obtiene la lista de estantes con su ubicación asociada",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Lista de estantes",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Estante",
                  },
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },

    "/estantes/verId/{id}": {
      get: {
        tags: ["Estantes"],
        summary: "Obtener estante por ID",
        description: "Obtiene los detalles de un estante específico",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID del estante",
          },
        ],
        responses: {
          200: {
            description: "Estante encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Estante",
                },
              },
            },
          },
          404: {
            description: "Estante no encontrado",
          },
          500: {
            description: "Error interno del servidor",
          },
        },
      },
    },
  },

  components: {
    schemas: {
      /* ============================
          AUTENTICACIÓN
      ============================ */

      Login: {
        type: "object",
        required: ["usuario_email", "password"],
        properties: {
          usuario_email: {
            type: "string",
            description: "Nombre de usuario, email o teléfono",
            example: "usuario123",
          },
          password: {
            type: "string",
            format: "password",
            description: "Contraseña del usuario",
            example: "micontraseña",
          },
        },
      },

      LoginResponse: {
        type: "object",
        properties: {
          mensaje: {
            type: "string",
            example: "Login exitoso",
          },
          token: {
            type: "string",
            description: "JWT sin expiración",
            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          },
          usuario: {
            $ref: "#/components/schemas/Usuario",
          },
        },
      },

      /* ============================
          USUARIOS
      ============================ */

      CreateUsuario: {
        type: "object",
        required: ["nombre", "usuario", "email_phone", "password"],
        properties: {
          nombre: {
            type: "string",
            description: "Nombre completo del usuario",
            example: "Juan Pérez",
          },
          usuario: {
            type: "string",
            description: "Nombre de usuario único",
            example: "juanp",
          },
          email_phone: {
            type: "string",
            description: "Email o teléfono único",
            example: "juan@email.com",
          },
          password: {
            type: "string",
            format: "password",
            description: "Contraseña (se hashea con bcrypt)",
            example: "123456",
          },
        },
      },

      UpdateEstadoUsuario: {
        type: "object",
        required: ["estado"],
        properties: {
          estado: {
            type: "boolean",
            description: "true = activo, false = inactivo",
            example: true,
          },
        },
      },

      Usuario: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          nombre: {
            type: "string",
            example: "Juan Pérez",
          },
          usuario: {
            type: "string",
            example: "juanp",
          },
          email_phone: {
            type: "string",
            example: "juan@email.com",
          },
          estado: {
            type: "boolean",
            example: true,
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
        },
      },

      /* ============================
          AUDITORÍA
      ============================ */

      Auditoria: {
        type: "object",
        description:
          "Registro de auditoría del sistema. Cada operación genera un registro que incluye el usuario que la realizó y la entidad afectada. Los campos de entidades (categoria, subcategoria, etc.) solo aparecen cuando son relevantes para esa operación.",
        properties: {
          id: {
            type: "integer",
            description: "ID único del registro de auditoría",
          },
          usuario_id: {
            type: "integer",
            description: "ID del usuario que realizó la acción",
          },
          accion: {
            type: "string",
            enum: [
              "CREATE",
              "UPDATE",
              "DELETE",
              "LOGIN",
              "VENTA",
              "AJUSTE_STOCK",
            ],
            description: "Tipo de acción realizada",
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Fecha y hora de la operación",
          },
          usuario: {
            type: "object",
            description: "Información del usuario que realizó la operación",
            properties: {
              id: {
                type: "integer",
              },
              nombre: {
                type: "string",
              },
              usuario: {
                type: "string",
              },
              email_phone: {
                type: "string",
              },
            },
          },
          categoria: {
            type: "object",
            nullable: true,
            description:
              "Datos de la categoría afectada (solo presente si la operación involucró una categoría)",
            properties: {
              id: {
                type: "integer",
              },
              nombre: {
                type: "string",
              },
            },
          },
          subcategoria: {
            type: "object",
            nullable: true,
            description:
              "Datos de la subcategoría afectada (solo presente si la operación involucró una subcategoría)",
            properties: {
              id: {
                type: "integer",
              },
              nombre: {
                type: "string",
              },
              categoriaId: {
                type: "integer",
              },
            },
          },
          producto: {
            type: "object",
            nullable: true,
            description:
              "Datos del producto afectado (solo presente si la operación involucró un producto)",
            properties: {
              id: {
                type: "integer",
              },
              nombre: {
                type: "string",
              },
              subcategoriaId: {
                type: "integer",
              },
            },
          },
          variante: {
            type: "object",
            nullable: true,
            description:
              "Datos de la variante afectada (solo presente si la operación involucró una variante)",
            properties: {
              id: {
                type: "integer",
              },
              nombre: {
                type: "string",
              },
              codigo: {
                type: "string",
              },
              color: {
                type: "string",
              },
              cantidad: {
                type: "integer",
              },
            },
          },
          venta: {
            type: "object",
            nullable: true,
            description:
              "Datos de la venta registrada (solo presente si la operación fue una venta)",
            properties: {
              id: {
                type: "integer",
              },
              total_venta: {
                type: "number",
                format: "float",
              },
              nombre_cliente: {
                type: "string",
              },
              contacto_cliente: {
                type: "string",
              },
            },
          },
          estante: {
            type: "object",
            nullable: true,
            description:
              "Datos del estante afectado (solo presente si la operación involucró un estante)",
            properties: {
              id: {
                type: "integer",
              },
              Seccion: {
                type: "string",
              },
              nivel: {
                type: "integer",
              },
              pasillo: {
                type: "integer",
              },
            },
          },
          ubicacion: {
            type: "object",
            nullable: true,
            description:
              "Datos de la ubicación afectada (solo presente si la operación involucró una ubicación)",
            properties: {
              id: {
                type: "integer",
              },
              nombre: {
                type: "string",
              },
              calle: {
                type: "string",
              },
              colonia: {
                type: "string",
              },
            },
          },
        },
      },

      ValidationError: {
        type: "object",
        properties: {
          errors: {
            type: "array",
            items: {
              type: "object",
              properties: {
                msg: {
                  type: "string",
                  description: "Mensaje de error",
                },
                param: {
                  type: "string",
                  description: "Campo que causó el error",
                },
              },
            },
          },
        },
      },

      /* ============================
      PRODUCTOS
      ============================ */

      CreateProductoConVariante: {
        type: "object",
        description:
          "Crea un producto y su primera variante en una sola operación. Nota: La variante se relaciona con un nivel específico del estante, no directamente con el estante o ubicación.",
        required: [
          "subcategoriaId",
          "ubi_alma_id",
          "nombre",
          "codigo",
          "color",
          "descripcion",
          "cantidad",
          "alto",
          "ancho",
          "largo",
          "precio_publico",
          "precio_contratista",
          "costo_compra",
          "foto",
        ],
        properties: {
          subcategoriaId: {
            type: "integer",
            description: "ID de la subcategoría del producto (requerido)",
          },
          ubi_alma_id: {
            type: "integer",
            description:
              "ID de la ubicación de almacén donde se almacena la variante. Corresponde a un registro de ubicacion_almacen.",
          },
          nombre: {
            type: "string",
            description: "Nombre de la variante",
          },
          codigo: {
            type: "string",
            description: "Código único de la variante",
          },
          color: {
            type: "string",
            description: "Color de la variante",
          },
          descripcion: {
            type: "string",
            description: "Descripción detallada",
          },
          cantidad: {
            type: "integer",
            minimum: 0,
            description: "Cantidad en stock",
          },
          alto: {
            type: "number",
            format: "float",
            description: "Altura del producto",
          },
          ancho: {
            type: "number",
            format: "float",
            description: "Ancho del producto",
          },
          largo: {
            type: "number",
            format: "float",
            description: "Largo del producto",
          },
          precio_publico: {
            type: "number",
            format: "float",
            minimum: 0,
            description: "Precio para público general",
          },
          precio_contratista: {
            type: "number",
            format: "float",
            minimum: 0,
            description: "Precio para contratistas",
          },
          costo_compra: {
            type: "number",
            format: "float",
            minimum: 0,
            description: "Costo de adquisición",
          },
          foto: {
            type: "string",
            description:
              "URL de la imagen del producto o archivo multipart/form-data",
          },
        },
      },

      CreateVariante: {
        type: "object",
        description: "Crea una variante adicional para un producto existente",
        required: [
          "productoId",
          "ubi_alma_id",
          "nombre",
          "codigo",
          "color",
          "descripcion",
          "cantidad",
          "alto",
          "ancho",
          "largo",
          "precio_publico",
          "precio_contratista",
          "costo_compra",
          "foto",
        ],
        properties: {
          productoId: {
            type: "integer",
            description: "ID del producto padre",
          },
          ubi_alma_id: {
            type: "integer",
            description: "ID de la ubicación de almacén donde se almacena",
          },
          nombre: {
            type: "string",
          },
          codigo: {
            type: "string",
          },
          color: {
            type: "string",
          },
          descripcion: {
            type: "string",
          },
          cantidad: {
            type: "integer",
            minimum: 0,
          },
          alto: {
            type: "number",
            format: "float",
            description: "Altura de la variante",
          },
          ancho: {
            type: "number",
            format: "float",
            description: "Ancho de la variante",
          },
          largo: {
            type: "number",
            format: "float",
            description: "Largo de la variante",
          },
          precio_publico: {
            type: "number",
            format: "float",
            minimum: 0,
          },
          precio_contratista: {
            type: "number",
            format: "float",
            minimum: 0,
          },
          costo_compra: {
            type: "number",
            format: "float",
            minimum: 0,
          },
          foto: {
            type: "string",
            description: "URL de la imagen o archivo multipart/form-data",
          },
        },
      },

      UpdateVariante: {
        type: "object",
        description:
          "Actualiza una variante existente. Todos los campos son opcionales; solo envíe los que desea modificar.",
        required: [],
        properties: {
          ubi_alma_id: {
            type: "integer",
            description: "ID de la ubicación de almacén",
          },
          nombre: {
            type: "string",
          },
          codigo: {
            type: "string",
          },
          color: {
            type: "string",
          },
          descripcion: {
            type: "string",
          },
          cantidad: {
            type: "integer",
            minimum: 0,
          },
          alto: {
            type: "number",
            format: "float",
            description: "Altura de la variante",
          },
          ancho: {
            type: "number",
            format: "float",
            description: "Ancho de la variante",
          },
          largo: {
            type: "number",
            format: "float",
            description: "Largo de la variante",
          },
          precio_publico: {
            type: "number",
            format: "float",
            minimum: 0,
          },
          precio_contratista: {
            type: "number",
            format: "float",
            minimum: 0,
          },
          costo_compra: {
            type: "number",
            format: "float",
            minimum: 0,
          },
          foto: {
            type: "string",
            description: "URL de la imagen o archivo multipart/form-data",
          },
        },
      },

      ProductoResumen: {
        type: "object",
        description: "Vista resumida del producto con sus variantes",
        properties: {
          id: {
            type: "integer",
          },
          categoriaId: {
            type: "integer",
            nullable: true,
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          categoria: {
            type: "object",
            nullable: true,
            properties: {
              nombre: {
                type: "string",
              },
            },
          },
          variantes: {
            type: "array",
            items: {
              type: "object",
              properties: {
                nombre: {
                  type: "string",
                },
                color: {
                  type: "string",
                },
                alto: {
                  type: "number",
                  format: "float",
                },
                ancho: {
                  type: "number",
                  format: "float",
                },
                largo: {
                  type: "number",
                  format: "float",
                },
                medidas: {
                  type: "string",
                },
              },
            },
          },
        },
      },

      ProductoDetalle: {
        type: "object",
        description: "Vista completa del producto con todas sus variantes",
        properties: {
          id: {
            type: "integer",
          },
          categoriaId: {
            type: "integer",
            nullable: true,
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          categoria: {
            type: "object",
            nullable: true,
            properties: {
              nombre: {
                type: "string",
              },
            },
          },
          variantes: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Variante",
            },
          },
        },
      },

      Variante: {
        type: "object",
        description: "Variante completa con todas sus propiedades",
        properties: {
          id: {
            type: "integer",
          },
          producto_id: {
            type: "integer",
            description: "ID del producto padre",
          },
          ubi_alma_id: {
            type: "integer",
            description: "ID de la ubicación de almacén donde se almacena",
          },
          nombre: {
            type: "string",
          },
          codigo: {
            type: "string",
          },
          color: {
            type: "string",
          },
          descripcion: {
            type: "string",
          },
          cantidad: {
            type: "integer",
          },
          alto: {
            type: "number",
            format: "float",
          },
          ancho: {
            type: "number",
            format: "float",
          },
          largo: {
            type: "number",
            format: "float",
          },
          medidas: {
            type: "string",
          },
          precio_publico: {
            type: "number",
            format: "float",
          },
          precio_contratista: {
            type: "number",
            format: "float",
          },
          costo_compra: {
            type: "number",
            format: "float",
          },
          ganacia_publico: {
            type: "number",
            format: "float",
          },
          ganacia_contratista: {
            type: "number",
            format: "float",
          },
          ganancias_stock: {
            type: "number",
            format: "float",
          },
          foto: {
            type: "string",
            format: "uri",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
        },
      },

      /* ============================
          CATEGORÍAS
      ============================ */

      CreateCategoria: {
        type: "object",
        required: ["nombre"],
        properties: {
          nombre: {
            type: "string",
            description: "Nombre único de la categoría",
            example: "Electrónica",
          },
        },
      },

      Categoria: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          nombre: {
            type: "string",
            example: "Electrónica",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          subcategorias: {
            type: "array",
            items: {
              $ref: "#/components/schemas/SubCategoria",
            },
            description: "Lista de subcategorías asociadas",
          },
        },
      },

      /* ============================
          SUBCATEGORÍAS
      ============================ */

      CreateSubCategoria: {
        type: "object",
        required: ["nombre", "categoriaId"],
        properties: {
          nombre: {
            type: "string",
            description: "Nombre de la subcategoría",
            example: "Celulares",
          },
          categoriaId: {
            type: "integer",
            description: "ID de la categoría padre",
            example: 1,
          },
        },
      },

      SubCategoria: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          nombre: {
            type: "string",
            example: "Celulares",
          },
          categoriaId: {
            type: "integer",
            example: 1,
          },
          ganancias_ventas: {
            type: "number",
            format: "float",
            description: "Ganancia acumulada en ventas",
            example: 0.0,
          },
          ganancias_stock: {
            type: "number",
            format: "float",
            description: "Ganancia potencial del stock",
            example: 0.0,
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
        },
      },

      /* ============================
          UBICACIONES
      ============================ */

      CreateUbicacion: {
        type: "object",
        required: ["nombre", "calle", "cp", "colonia", "celular"],
        properties: {
          nombre: {
            type: "string",
            description: "Nombre identificador de la ubicación",
            example: "Bodega Central",
          },
          calle: {
            type: "string",
            example: "Av. Principal 123",
          },
          cp: {
            type: "string",
            example: "12345",
          },
          colonia: {
            type: "string",
            example: "Centro",
          },
          celular: {
            type: "string",
            example: "+52 555 123 4567",
          },
        },
      },

      Ubicacion: {
        type: "object",
        properties: {
          id: {
            type: "integer",
          },
          nombre: {
            type: "string",
          },
          calle: {
            type: "string",
          },
          cp: {
            type: "string",
          },
          colonia: {
            type: "string",
          },
          celular: {
            type: "string",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
        },
      },

      /* ============================
          VENTAS
      ============================ */

      CreateVenta: {
        type: "object",
        required: [
          "varianteId",
          "cantidad",
          "total_venta",
          "nombre_cliente",
          "contacto_cliente",
          "tipo_venta",
        ],
        properties: {
          varianteId: {
            type: "integer",
            description: "ID de la variante vendida",
          },
          cantidad: {
            type: "integer",
            minimum: 1,
            description: "Cantidad de unidades vendidas",
          },
          total_venta: {
            type: "number",
            format: "float",
            minimum: 0,
            description: "Monto total de la venta",
          },
          nombre_cliente: {
            type: "string",
            description: "Nombre del cliente",
            example: "Pedro Martínez",
          },
          contacto_cliente: {
            type: "string",
            description: "Teléfono o email del cliente",
            example: "+52 555 987 6543",
          },
          tipo_venta: {
            type: "string",
            enum: ["publico", "contratista"],
            description:
              "Tipo de venta que determina el precio y ganancia a calcular",
            example: "publico",
          },
          costos_extras: {
            type: "array",
            description:
              "Array de costos adicionales (envío, instalación, etc.)",
            items: {
              type: "object",
              required: ["motivo", "costo"],
              properties: {
                motivo: {
                  type: "string",
                  description: "Descripción del costo extra",
                  example: "Envío a domicilio",
                },
                costo: {
                  type: "number",
                  format: "float",
                  minimum: 0,
                  description: "Monto del costo extra",
                  example: 150.0,
                },
              },
            },
            example: [
              { motivo: "Envío", costo: 150.0 },
              { motivo: "Instalación", costo: 300.0 },
            ],
          },
        },
      },

      Venta: {
        type: "object",
        description: "Registro completo de venta con snapshot de precios",
        properties: {
          id: {
            type: "integer",
          },
          variante_id: {
            type: "integer",
          },
          cantidad: {
            type: "integer",
          },
          total_venta: {
            type: "number",
            format: "float",
          },
          fecha_venta: {
            type: "string",
            format: "date-time",
            description: "Timestamp de la venta",
          },
          nombre_cliente: {
            type: "string",
          },
          contacto_cliente: {
            type: "string",
          },
          precio_publico: {
            type: "number",
            format: "float",
            description: "Precio público al momento de la venta (snapshot)",
          },
          precio_contratista: {
            type: "number",
            format: "float",
            description: "Precio contratista al momento de la venta (snapshot)",
          },
          costo_compra: {
            type: "number",
            format: "float",
            description: "Costo de compra al momento de la venta (snapshot)",
          },
          costosExtras: {
            type: "array",
            description: "Relación con costos adicionales de la venta",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "integer",
                },
                venta_id: {
                  type: "integer",
                },
                motivo: {
                  type: "string",
                },
                costo: {
                  type: "number",
                  format: "float",
                },
                createdAt: {
                  type: "string",
                  format: "date-time",
                },
              },
            },
          },
        },
      },

      /* ============================
          ESTANTES
      ============================ */

      CreateEstante: {
        type: "object",
        required: ["pasillo", "seccion", "niveles"],
        properties: {
          pasillo: {
            type: "integer",
            minimum: 0,
            description: "Número de pasillo",
            example: 1,
          },
          seccion: {
            type: "string",
            description: "Letra o código de sección",
            example: "A",
          },
          niveles: {
            type: "integer",
            minimum: 1,
            description: "Cantidad de niveles a crear para este estante",
            example: 3,
          },
          ubicacionId: {
            type: "integer",
            nullable: true,
            description: "ID de la ubicación física (opcional)",
            example: 5,
          },
        },
      },

      Estante: {
        type: "object",
        description: "Estante con sus niveles y ubicación asociada",
        properties: {
          id: {
            type: "integer",
          },
          pasillo: {
            type: "integer",
          },
          Seccion: {
            type: "string",
            description: "Campo con PascalCase según Prisma",
          },
          ubicacionId: {
            type: "integer",
            nullable: true,
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          ubicacion: {
            nullable: true,
            allOf: [
              {
                $ref: "#/components/schemas/Ubicacion",
              },
            ],
          },
          niveles: {
            type: "array",
            description: "Niveles del estante (relación con tabla niveles)",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "integer",
                },
                estantesId: {
                  type: "integer",
                },
                niveles: {
                  type: "integer",
                  description: "Número del nivel (1, 2, 3, etc.)",
                },
              },
            },
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description:
          "JWT token sin expiración. Incluir en header: Authorization: Bearer {token}",
      },
    },
  },
};

export default swaggerJSDoc({
  swaggerDefinition,
  apis: [],
});
