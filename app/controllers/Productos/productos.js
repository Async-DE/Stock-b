import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";
import { uploadFile, getPublicUrl } from "../../bucket_service/bucket.js";

const createProducto = async (req, res) => {
  const {
    subcategoriaId,
    nivelesId,
    nombre,
    codigo,
    color,
    descripcion,
    cantidad,
    medidas,
    precio_publico,
    precio_contratista,
    costo_compra,
    foto,
  } = req.body;

  // Validar los datos de entrada producto
  await check("subcategoriaId")
    .notEmpty()
    .isInt()
    .withMessage(
      "El ID de subcategoría es obligatorio y debe ser un número entero",
    )
    .run(req);
  await check("nivelesId")
    .notEmpty()
    .isInt()
    .withMessage("El nivelesId es obligatorio y debe ser un número entero")
    .run(req);

  // Validar los datos de entrada variante
  await check("nombre")
    .notEmpty()
    .isString()
    .withMessage(
      "El nombre de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("codigo")
    .notEmpty()
    .isString()
    .withMessage(
      "El código de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("color")
    .notEmpty()
    .isString()
    .withMessage(
      "El color de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("descripcion")
    .notEmpty()
    .isString()
    .withMessage(
      "La descripción de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("cantidad")
    .notEmpty()
    .isInt()
    .withMessage(
      "La cantidad de la variante es obligatorio y debe ser un número entero",
    )
    .run(req);
  await check("medidas")
    .notEmpty()
    .isString()
    .withMessage(
      "Las medidas de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("precio_publico")
    .notEmpty()
    .isFloat()
    .withMessage(
      "El precio público de la variante es obligatorio y debe ser un número decimal",
    )
    .run(req);
  await check("precio_contratista")
    .notEmpty()
    .isFloat()
    .withMessage(
      "El precio contratista de la variante es obligatorio y debe ser un número decimal",
    )
    .run(req);
  await check("costo_compra")
    .notEmpty()
    .isFloat()
    .withMessage(
      "El costo de compra de la variante es obligatorio y debe ser un número decimal",
    )
    .run(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Validar foto (archivo o URL)
  if (!req.file && !foto) {
    return res
      .status(400)
      .json({ error: "La foto es obligatoria (archivo o URL de texto)" });
  }

  // Parsear valores numéricos
  const subcategoriaIdInt = parseInt(subcategoriaId, 10);
  const nivelesIdInt = parseInt(nivelesId, 10);
  const cantidadInt = parseInt(cantidad, 10);
  const precioPublicoFloat = parseFloat(precio_publico);
  const precioContratistaFloat = parseFloat(precio_contratista);
  const costoCompraFloat = parseFloat(costo_compra);

  //Validar que el codigo no exista en la base de datos
  const productoExistente = await prisma.variantes.findFirst({
    where: { codigo },
  });
  if (productoExistente) {
    return res.status(400).json({ error: "La variante ya existe" });
  }

  const subcategoriaExistente = await prisma.subcategorias.findFirst({
    where: { id: subcategoriaIdInt },
  });
  if (!subcategoriaExistente) {
    return res.status(400).json({ error: "La subcategoría no existe" });
  }

  const nivelExistente = await prisma.niveles.findFirst({
    where: { id: nivelesIdInt },
  });
  if (!nivelExistente) {
    return res.status(400).json({ error: "El nivel no existe" });
  }

  try {
    // Manejo de subida de archivo
    let fotoUrl = foto;
    if (req.file) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extension = req.file.originalname.split(".").pop();
      const key = `productos/${uniqueSuffix}.${extension}`;

      await uploadFile({
        key: key,
        body: req.file.buffer,
        contentType: req.file.mimetype,
      });
      fotoUrl = getPublicUrl(key);
    }

    // Crear el producto
    const productoCreado = await prisma.productos.create({
      data: {
        subcategoriaId: subcategoriaIdInt,
      },
    });

    // Crear variante básica relacionada con el producto
    const varianteCreada = await prisma.variantes.create({
      data: {
        producto_id: productoCreado.id,
        nivelesId: nivelesIdInt,
        nombre,
        codigo,
        color,
        descripcion,
        cantidad: cantidadInt,
        medidas,
        precio_publico: precioPublicoFloat,
        precio_contratista: precioContratistaFloat,
        costo_compra: costoCompraFloat,
        foto: fotoUrl,
      },
    });

    // Registrar en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: req.user.id,
        accion: "CREATE",
        productoId: productoCreado.id,
        varianteId: varianteCreada.id,
      },
    });

    res.status(200).json("Producto y variante básica creados con éxito");
  } catch (error) {
    console.error("Error al crear el producto:", error);
    res.status(500).json({
      error: "Error al crear el producto",
      details: error.message,
      code: error.code,
    });
  }
};

const crearVariante = async (req, res) => {
  const {
    nivelesId,
    productoId,
    nombre,
    codigo,
    color,
    descripcion,
    cantidad,
    medidas,
    precio_publico,
    precio_contratista,
    costo_compra,
    foto,
  } = req.body;

  // Validar los datos de entrada variante
  await check("nivelesId")
    .notEmpty()
    .isInt()
    .withMessage("El nivelesId es obligatorio y debe ser un número entero")
    .run(req);
  await check("productoId")
    .notEmpty()
    .isInt()
    .withMessage("El productoId es obligatorio y debe ser un número entero")
    .run(req);
  await check("nombre")
    .notEmpty()
    .isString()
    .withMessage(
      "El nombre de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("codigo")
    .notEmpty()
    .isString()
    .withMessage(
      "El código de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("color")
    .notEmpty()
    .isString()
    .withMessage(
      "El color de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("descripcion")
    .notEmpty()
    .isString()
    .withMessage(
      "La descripción de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("cantidad")
    .notEmpty()
    .isInt()
    .withMessage(
      "La cantidad de la variante es obligatorio y debe ser un número entero",
    )
    .run(req);
  await check("medidas")
    .notEmpty()
    .isString()
    .withMessage(
      "Las medidas de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("precio_publico")
    .notEmpty()
    .isFloat()
    .withMessage(
      "El precio público de la variante es obligatorio y debe ser un número decimal",
    )
    .run(req);
  await check("precio_contratista")
    .notEmpty()
    .isFloat()
    .withMessage(
      "El precio contratista de la variante es obligatorio y debe ser un número decimal",
    )
    .run(req);
  await check("costo_compra")
    .notEmpty()
    .isFloat()
    .withMessage(
      "El costo de compra de la variante es obligatorio y debe ser un número decimal",
    )
    .run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Validar foto (archivo o URL)
  if (!req.file && !foto) {
    return res
      .status(400)
      .json({ error: "La foto es obligatoria (archivo o URL de texto)" });
  }

  //Validar que el codigo no exista en la base de datos
  var varianteExistente = await prisma.variantes.findFirst({
    where: { codigo },
  });
  if (varianteExistente) {
    return res.status(400).json({ error: "La variante ya existe" });
  }

  try {
    // Manejo de subida de archivo
    let fotoUrl = foto;
    if (req.file) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extension = req.file.originalname.split(".").pop();
      const key = `productos/${uniqueSuffix}.${extension}`;

      await uploadFile({
        key: key,
        body: req.file.buffer,
        contentType: req.file.mimetype,
      });
      fotoUrl = getPublicUrl(key);
    }

    // Parsear valores numéricos
    const productoIdInt = parseInt(productoId, 10);
    const nivelesIdInt = parseInt(nivelesId, 10);
    const cantidadInt = parseInt(cantidad, 10);
    const precioPublicoFloat = parseFloat(precio_publico);
    const precioContratistaFloat = parseFloat(precio_contratista);
    const costoCompraFloat = parseFloat(costo_compra);

    const nuevaVariante = await prisma.variantes.create({
      data: {
        producto_id: productoIdInt,
        nivelesId: nivelesIdInt,
        nombre,
        codigo,
        color,
        descripcion,
        cantidad: cantidadInt,
        medidas,
        precio_publico: precioPublicoFloat,
        precio_contratista: precioContratistaFloat,
        costo_compra: costoCompraFloat,
        foto: fotoUrl,
      },
    });

    // Registrar en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: req.user.id,
        accion: "CREATE",
        productoId: productoIdInt,
        varianteId: nuevaVariante.id,
      },
    });

    res.status(201).json("Variante creada con éxito");
  } catch (error) {
    res.status(500).json({ error: "Error al crear la variante" });
  }
};

const updateVariante = async (req, res) => {
  const { varianteId } = req.params;
  const {
    nivelesId,
    nombre,
    codigo,
    color,
    descripcion,
    cantidad,
    medidas,
    precio_publico,
    precio_contratista,
    costo_compra,
  } = req.body;

  // Validar los datos de entrada variante
  await check("nivelesId")
    .notEmpty()
    .isInt()
    .withMessage("El nivelesId es obligatorio y debe ser un número entero")
    .run(req);
  await check("nombre")
    .notEmpty()
    .isString()
    .withMessage(
      "El nombre de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("codigo")
    .notEmpty()
    .isString()
    .withMessage(
      "El código de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("color")
    .notEmpty()
    .isString()
    .withMessage(
      "El color de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("descripcion")
    .notEmpty()
    .isString()
    .withMessage(
      "La descripción de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("cantidad")
    .notEmpty()
    .isInt()
    .withMessage(
      "La cantidad de la variante es obligatorio y debe ser un número entero",
    )
    .run(req);
  await check("medidas")
    .notEmpty()
    .isString()
    .withMessage(
      "Las medidas de la variante es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("precio_publico")
    .notEmpty()
    .isFloat()
    .withMessage(
      "El precio público de la variante es obligatorio y debe ser un número decimal",
    )
    .run(req);
  await check("precio_contratista")
    .notEmpty()
    .isFloat()
    .withMessage(
      "El precio contratista de la variante es obligatorio y debe ser un número decimal",
    )
    .run(req);
  await check("costo_compra")
    .notEmpty()
    .isFloat()
    .withMessage(
      "El costo de compra de la variante es obligatorio y debe ser un número decimal",
    )
    .run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Parsear valores numéricos
    const varianteIdInt = parseInt(varianteId, 10);
    const nivelesIdInt = parseInt(nivelesId, 10);
    const cantidadInt = parseInt(cantidad, 10);
    const precioPublicoFloat = parseFloat(precio_publico);
    const precioContratistaFloat = parseFloat(precio_contratista);
    const costoCompraFloat = parseFloat(costo_compra);

    const varianteActualizada = await prisma.variantes.update({
      where: { id: varianteIdInt },
      data: {
        nivelesId: nivelesIdInt,
        nombre,
        codigo,
        color,
        descripcion,
        cantidad: cantidadInt,
        medidas,
        precio_publico: precioPublicoFloat,
        precio_contratista: precioContratistaFloat,
        costo_compra: costoCompraFloat,
      },
    });

    // Registrar en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: req.user.id,
        accion: "UPDATE",
        productoId: varianteActualizada.producto_id,
        varianteId: varianteIdInt,
      },
    });

    res.status(200).json("Variante actualizada con éxito");
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar la variante",
      details: error.message,
    });
  }
};

const getProductosBySubcategoria = async (req, res) => {
  const { subcategoriaId } = req.params;

  // Validar que subcategoriaId sea un número
  if (!subcategoriaId || isNaN(subcategoriaId)) {
    return res.status(400).json({ error: "El ID de subcategoría es inválido" });
  }

  try {
    const productos = await prisma.productos.findMany({
      where: {
        subcategoriaId: parseInt(subcategoriaId),
      },
      include: {
        subcategoria: {
          include: {
            categoria: {
              select: {
                nombre: true,
              },
            },
          },
        },
        variantes: {
          select: {
            foto: true,
            nombre: true,
            color: true,
            medidas: true,
            precio_publico: true,
            precio_contratista: true,
            cantidad: true,
            niveles: {
              include: {
                estantes: {
                  include: { ubicacion: true },
                },
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (productos.length === 0) {
      return res
        .status(404)
        .json({ error: "No se Encontraron productos para esta categoría" });
    }
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener productos por categoría" });
  }
};

const getProductoById = async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await prisma.productos.findUnique({
      where: { id: parseInt(id) },
      include: {
        subcategoria: {
          include: {
            categoria: true,
          },
        },
        variantes: {
          include: {
            niveles: {
              include: {
                estantes: {
                  include: { ubicacion: true },
                },
              },
            },
          },
        },
      },
    });

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

const getProductosBySearch = async (req, res) => {
  const { search } = req.body;

  try {
    const productos = await prisma.productos.findMany({
      where: {
        OR: [
          {
            subcategoria: { nombre: { contains: search, mode: "insensitive" } },
          },
          {
            subcategoria: {
              categoria: { nombre: { contains: search, mode: "insensitive" } },
            },
          },
          {
            variantes: {
              some: {
                OR: [
                  { nombre: { contains: search, mode: "insensitive" } },
                  { color: { contains: search, mode: "insensitive" } },
                  { codigo: { contains: search, mode: "insensitive" } },
                ],
              },
            },
          },
        ],
      },
      include: {
        subcategoria: {
          include: {
            categoria: {
              select: {
                nombre: true,
              },
            },
          },
        },
        variantes: {
          select: {
            nombre: true,
            color: true,
            medidas: true,
            foto: true,
            precio_publico: true,
            precio_contratista: true,
            cantidad: true,
            niveles: {
              include: {
                estantes: {
                  include: { ubicacion: true },
                },
              },
            },
          },
        },
      },
    });

    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al buscar productos:", error);
    res
      .status(500)
      .json({ error: "Error al buscar productos", details: error.message });
  }
};

export {
  createProducto,
  crearVariante,
  updateVariante,
  getProductosBySubcategoria,
  getProductoById,
  getProductosBySearch,
};
