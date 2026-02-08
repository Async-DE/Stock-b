import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",

  info: {
    title: "Stock Manager API",
    version: "1.0.0",
    description: `
API backend para control de inventarios, productos, usuarios y ventas.

- Todas las peticiones y respuestas son en JSON
- Todas las acciones generan auditoría
- Pensada para consumo por aplicación móvil (React Native)
- **Base URL**: \`/stock\`
    `,
  },

  servers: [
    {
      url: "http://localhost:3730/stock",
      description: "Servidor local",
    },
  ],

  tags: [
    {
      name: "Usuarios",
      description: "Gestión de usuarios y estados",
    },
    {
      name: "Auditoría",
      description: "Consultas de auditoría del sistema",
    },
    {
      name: "Productos",
      description: "Gestión de productos y variantes",
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
  ],

  paths: {
    /* ============================
       USUARIOS
    ============================ */

    "/usuarios/crear": {
      post: {
        tags: ["Usuarios"],
        summary: "Crear usuario",
        description: "Crea un nuevo usuario activo en el sistema",
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
        description: "Obtiene la lista de usuarios, opcionalmente filtrados por estado",
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

    "/usuarios/auditoria/general": {
      get: {
        tags: ["Auditoría"],
        summary: "Auditoría general",
        description: "Obtiene los últimos 20 movimientos del sistema",
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

    "/usuarios/auditoria/usuario/{id}": {
      get: {
        tags: ["Auditoría"],
        summary: "Auditoría por usuario",
        description: "Obtiene los últimos 20 movimientos de un usuario específico",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID del usuario",
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
        description: "Crea un producto y su variante inicial en una sola operación",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateProductoConVariante",
              },
              example: {
                categoriaId: 1,
                estantesId: 2,
                ubicacion_id: 1,
                nombre: "Tornillo Phillips",
                codigo: "TOR-PH-001",
                color: "Plateado",
                descripcion: "Tornillo Phillips 1/4 x 2 pulgadas",
                cantidad: 500,
                medidas: "1/4 x 2 in",
                precio_publico: 1.50,
                precio_contratista: 1.20,
                costo_compra: 0.80,
                ganacia_publico: 0.70,
                ganacia_contratista: 0.40,
                ganancias_stock: 350.00,
                foto: "https://ejemplo.com/tornillo.jpg"
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
                  example: "Producto y variante básica creados con éxito"
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
        description: "Busca productos por categoría, nombre de variante, color o código",
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
                    example: "tornillo"
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

    "/productos/ver/categoria/{categoriaId}": {
      get: {
        tags: ["Productos"],
        summary: "Productos por categoría",
        description: "Obtiene todos los productos de una categoría específica",
        parameters: [
          {
            name: "categoriaId",
            in: "path",
            required: true,
            schema: { type: "integer" },
            description: "ID de la categoría",
          },
        ],
        responses: {
          200: {
            description: "Lista de productos por categoría",
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
            description: "No se encontraron productos para esta categoría",
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
        description: "Crea una nueva variante para un producto existente",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateVariante",
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
                  example: "Variante creada con éxito"
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
        description: "Actualiza los datos de una variante existente",
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
                  example: "Variante actualizada con éxito"
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
                    example: "2024-01-01T00:00:00.000Z"
                  },
                  endDate: {
                    type: "string",
                    format: "date-time",
                    description: "Fecha final (ISO 8601)",
                    example: "2024-12-31T23:59:59.999Z"
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
                    example: "Juan Pérez"
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
    ESTANTES
    ============================ */

    "/estantes/crear": {
      post: {
        tags: ["Estantes"],
        summary: "Crear estante",
        description: "Crea un nuevo estante asociado opcionalmente a una ubicación",
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
                nivel: 2,
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
          USUARIOS
      ============================ */

      CreateUsuario: {
        type: "object",
        required: ["nombre", "usuario", "email_phone", "password"],
        properties: {
          nombre: {
            type: "string",
            description: "Nombre completo del usuario",
            example: "Juan Pérez"
          },
          usuario: {
            type: "string",
            description: "Nombre de usuario único",
            example: "juanp"
          },
          email_phone: {
            type: "string",
            description: "Email o teléfono único",
            example: "juan@email.com"
          },
          password: {
            type: "string",
            format: "password",
            description: "Contraseña (se hashea con bcrypt)",
            example: "123456"
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
            example: true
          },
        },
      },

      Usuario: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1
          },
          nombre: {
            type: "string",
            example: "Juan Pérez"
          },
          usuario: {
            type: "string",
            example: "juanp"
          },
          email_phone: {
            type: "string",
            example: "juan@email.com"
          },
          estado: {
            type: "boolean",
            example: true
          },
          createdAt: {
            type: "string",
            format: "date-time"
          },
          updatedAt: {
            type: "string",
            format: "date-time"
          },
        },
      },

      /* ============================
          AUDITORÍA
      ============================ */

      Auditoria: {
        type: "object",
        properties: {
          id: {
            type: "integer"
          },
          accion: {
            type: "string",
            enum: ["CREATE", "UPDATE", "DELETE", "LOGIN", "VENTA", "AJUSTE_STOCK"],
            description: "Tipo de acción realizada"
          },
          createdAt: {
            type: "string",
            format: "date-time"
          },
          usuario: {
            type: "object",
            properties: {
              id: {
                type: "integer"
              },
              nombre: {
                type: "string"
              },
              usuario: {
                type: "string"
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
                  description: "Mensaje de error"
                },
                param: {
                  type: "string",
                  description: "Campo que causó el error"
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
        description: "Crea un producto y su primera variante en una sola operación",
        required: [
          "categoriaId",
          "estantesId",
          "ubicacion_id",
          "nombre",
          "codigo",
          "color",
          "descripcion",
          "cantidad",
          "medidas",
          "precio_publico",
          "precio_contratista",
          "costo_compra",
          "ganacia_publico",
          "ganacia_contratista",
          "ganancias_stock",
          "foto",
        ],
        properties: {
          categoriaId: {
            type: "integer",
            description: "ID de la categoría del producto"
          },
          estantesId: {
            type: "integer",
            description: "ID del estante donde se almacena"
          },
          ubicacion_id: {
            type: "integer",
            description: "ID de la ubicación física"
          },
          nombre: {
            type: "string",
            description: "Nombre de la variante"
          },
          codigo: {
            type: "string",
            description: "Código único de la variante"
          },
          color: {
            type: "string",
            description: "Color de la variante"
          },
          descripcion: {
            type: "string",
            description: "Descripción detallada"
          },
          cantidad: {
            type: "integer",
            minimum: 0,
            description: "Cantidad en stock"
          },
          medidas: {
            type: "string",
            description: "Dimensiones o medidas"
          },
          precio_publico: {
            type: "number",
            format: "float",
            minimum: 0,
            description: "Precio para público general"
          },
          precio_contratista: {
            type: "number",
            format: "float",
            minimum: 0,
            description: "Precio para contratistas"
          },
          costo_compra: {
            type: "number",
            format: "float",
            minimum: 0,
            description: "Costo de adquisición"
          },
          ganacia_publico: {
            type: "number",
            format: "float",
            description: "Ganancia acumulada en ventas públicas"
          },
          ganacia_contratista: {
            type: "number",
            format: "float",
            description: "Ganancia acumulada en ventas a contratistas"
          },
          ganancias_stock: {
            type: "number",
            format: "float",
            description: "Ganancia total potencial del stock"
          },
          foto: {
            type: "string",
            format: "uri",
            description: "URL de la imagen del producto"
          },
        },
      },

      CreateVariante: {
        type: "object",
        description: "Crea una variante adicional para un producto existente",
        required: [
          "productoId",
          "estantesId",
          "ubicacion_id",
          "nombre",
          "codigo",
          "color",
          "descripcion",
          "cantidad",
          "medidas",
          "precio_publico",
          "precio_contratista",
          "costo_compra",
          "ganacia_publico",
          "ganacia_contratista",
          "ganancias_stock",
          "foto",
        ],
        properties: {
          productoId: {
            type: "integer",
            description: "ID del producto padre"
          },
          estantesId: {
            type: "integer",
            description: "ID del estante"
          },
          ubicacion_id: {
            type: "integer",
            description: "ID de la ubicación"
          },
          nombre: {
            type: "string"
          },
          codigo: {
            type: "string"
          },
          color: {
            type: "string"
          },
          descripcion: {
            type: "string"
          },
          cantidad: {
            type: "integer",
            minimum: 0
          },
          medidas: {
            type: "string"
          },
          precio_publico: {
            type: "number",
            format: "float",
            minimum: 0
          },
          precio_contratista: {
            type: "number",
            format: "float",
            minimum: 0
          },
          costo_compra: {
            type: "number",
            format: "float",
            minimum: 0
          },
          ganacia_publico: {
            type: "number",
            format: "float"
          },
          ganacia_contratista: {
            type: "number",
            format: "float"
          },
          ganancias_stock: {
            type: "number",
            format: "float"
          },
          foto: {
            type: "string",
            format: "uri"
          },
        },
      },

      UpdateVariante: {
        type: "object",
        description: "Actualiza una variante existente (todos los campos son requeridos según controlador)",
        required: [
          "estantesId",
          "ubicacion_id",
          "nombre",
          "codigo",
          "color",
          "descripcion",
          "cantidad",
          "medidas",
          "precio_publico",
          "precio_contratista",
          "costo_compra",
          "ganacia_publico",
          "ganacia_contratista",
          "ganancias_stock",
          "foto",
        ],
        properties: {
          estantesId: {
            type: "integer"
          },
          ubicacion_id: {
            type: "integer"
          },
          nombre: {
            type: "string"
          },
          codigo: {
            type: "string"
          },
          color: {
            type: "string"
          },
          descripcion: {
            type: "string"
          },
          cantidad: {
            type: "integer",
            minimum: 0
          },
          medidas: {
            type: "string"
          },
          precio_publico: {
            type: "number",
            format: "float",
            minimum: 0
          },
          precio_contratista: {
            type: "number",
            format: "float",
            minimum: 0
          },
          costo_compra: {
            type: "number",
            format: "float",
            minimum: 0
          },
          ganacia_publico: {
            type: "number",
            format: "float"
          },
          ganacia_contratista: {
            type: "number",
            format: "float"
          },
          ganancias_stock: {
            type: "number",
            format: "float"
          },
          foto: {
            type: "string",
            format: "uri"
          },
        },
      },

      ProductoResumen: {
        type: "object",
        description: "Vista resumida del producto con sus variantes",
        properties: {
          id: {
            type: "integer"
          },
          categoriaId: {
            type: "integer",
            nullable: true
          },
          createdAt: {
            type: "string",
            format: "date-time"
          },
          categoria: {
            type: "object",
            nullable: true,
            properties: {
              nombre: {
                type: "string"
              },
            },
          },
          variantes: {
            type: "array",
            items: {
              type: "object",
              properties: {
                nombre: {
                  type: "string"
                },
                color: {
                  type: "string"
                },
                medidas: {
                  type: "string"
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
            type: "integer"
          },
          categoriaId: {
            type: "integer",
            nullable: true
          },
          createdAt: {
            type: "string",
            format: "date-time"
          },
          categoria: {
            type: "object",
            nullable: true,
            properties: {
              nombre: {
                type: "string"
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
            type: "integer"
          },
          producto_id: {
            type: "integer",
            description: "ID del producto padre"
          },
          ubicacion_id: {
            type: "integer",
            description: "ID de la ubicación física"
          },
          estante_id: {
            type: "integer",
            description: "ID del estante"
          },
          nombre: {
            type: "string"
          },
          codigo: {
            type: "string"
          },
          color: {
            type: "string"
          },
          descripcion: {
            type: "string"
          },
          cantidad: {
            type: "integer"
          },
          medidas: {
            type: "string"
          },
          precio_publico: {
            type: "number",
            format: "float"
          },
          precio_contratista: {
            type: "number",
            format: "float"
          },
          costo_compra: {
            type: "number",
            format: "float"
          },
          ganacia_publico: {
            type: "number",
            format: "float"
          },
          ganacia_contratista: {
            type: "number",
            format: "float"
          },
          ganancias_stock: {
            type: "number",
            format: "float"
          },
          foto: {
            type: "string",
            format: "uri"
          },
          createdAt: {
            type: "string",
            format: "date-time"
          },
          updatedAt: {
            type: "string",
            format: "date-time"
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
            example: "Bodega Central"
          },
          calle: {
            type: "string",
            example: "Av. Principal 123"
          },
          cp: {
            type: "string",
            example: "12345"
          },
          colonia: {
            type: "string",
            example: "Centro"
          },
          celular: {
            type: "string",
            example: "+52 555 123 4567"
          },
        },
      },

      Ubicacion: {
        type: "object",
        properties: {
          id: {
            type: "integer"
          },
          nombre: {
            type: "string"
          },
          calle: {
            type: "string"
          },
          cp: {
            type: "string"
          },
          colonia: {
            type: "string"
          },
          celular: {
            type: "string"
          },
          createdAt: {
            type: "string",
            format: "date-time"
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
        ],
        properties: {
          varianteId: {
            type: "integer",
            description: "ID de la variante vendida"
          },
          cantidad: {
            type: "integer",
            minimum: 1,
            description: "Cantidad de unidades vendidas"
          },
          total_venta: {
            type: "number",
            format: "float",
            minimum: 0,
            description: "Monto total de la venta"
          },
          nombre_cliente: {
            type: "string",
            description: "Nombre del cliente",
            example: "Pedro Martínez"
          },
          contacto_cliente: {
            type: "string",
            description: "Teléfono o email del cliente",
            example: "+52 555 987 6543"
          },
          costos_extras: {
            type: "number",
            format: "float",
            minimum: 0,
            description: "Costos adicionales (envío, instalación, etc.)",
            default: 0
          },
          motivo_costo_extra: {
            type: "string",
            description: "Descripción de los costos extras",
            example: "Envío a domicilio"
          },
        },
      },

      Venta: {
        type: "object",
        description: "Registro completo de venta con snapshot de precios",
        properties: {
          id: {
            type: "integer"
          },
          variante_id: {
            type: "integer"
          },
          cantidad: {
            type: "integer"
          },
          total_venta: {
            type: "number",
            format: "float"
          },
          fecha_venta: {
            type: "string",
            format: "date-time",
            description: "Timestamp de la venta"
          },
          nombre_cliente: {
            type: "string"
          },
          contacto_cliente: {
            type: "string"
          },
          costos_extras: {
            type: "number",
            format: "float"
          },
          motivo_costo_extra: {
            type: "string"
          },
          precio_publico: {
            type: "number",
            format: "float",
            description: "Precio público al momento de la venta"
          },
          precio_contratista: {
            type: "number",
            format: "float",
            description: "Precio contratista al momento de la venta"
          },
          costo_compra: {
            type: "number",
            format: "float",
            description: "Costo de compra al momento de la venta"
          },
        },
      },

      /* ============================
          ESTANTES
      ============================ */

      CreateEstante: {
        type: "object",
        required: ["pasillo", "seccion", "nivel"],
        properties: {
          pasillo: {
            type: "integer",
            minimum: 1,
            description: "Número de pasillo",
            example: 1,
          },
          seccion: {
            type: "string",
            description: "Letra o código de sección",
            example: "A",
          },
          nivel: {
            type: "integer",
            minimum: 1,
            description: "Nivel o altura del estante",
            example: 2,
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
        description: "Estante con su ubicación asociada",
        properties: {
          id: {
            type: "integer"
          },
          pasillo: {
            type: "integer"
          },
          Seccion: {
            type: "string",
            description: "Campo con PascalCase según Prisma"
          },
          nivel: {
            type: "integer"
          },
          ubicacionId: {
            type: "integer",
            nullable: true
          },
          createdAt: {
            type: "string",
            format: "date-time"
          },
          ubicacion: {
            nullable: true,
            allOf: [
              {
                $ref: "#/components/schemas/Ubicacion",
              },
            ],
          },
        },
      },
    },
  },
};

export default swaggerJSDoc({
  swaggerDefinition,
  apis: [],
});