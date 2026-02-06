import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createProducto = async (req, res) => {
  const { categoriaId,estantesId, locacion_id,nombre,codigo,color, descripcion,cantidad,medidas,precio_publico,precio_contratista,costo_compra,ganacia_publico,ganacia_contratista,ganancias_stock,foto } = req.body;

    // Validar los datos de entrada producto
    await check("categoriaId").notEmpty().isInt().withMessage("El ID de categoría es obligatorio y debe ser un número entero").run(req);
    await check("estantesId").notEmpty().isInt().withMessage("El estantesId es obligatorio y debe ser un número entero").run(req);

    // Validar los datos de entrada variante
    await check("locacion_id").notEmpty().isInt().withMessage("El ID de locación es obligatorio y debe ser un número entero").run(req);
    await check("nombre").notEmpty().isString().withMessage("El nombre de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("codigo").notEmpty().isString().withMessage("El código de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("color").notEmpty().isString().withMessage("El color de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("descripcion").notEmpty().isString().withMessage("La descripción de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("cantidad").notEmpty().isInt().withMessage("La cantidad de la variante es obligatorio y debe ser un número entero").run(req);
    await check("medidas").notEmpty().isString().withMessage("Las medidas de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("precio_publico").notEmpty().isFloat().withMessage("El precio público de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("precio_contratista").notEmpty().isFloat().withMessage("El precio contratista de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("costo_compra").notEmpty().isFloat().withMessage("El costo de compra de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("ganacia_publico").notEmpty().isFloat().withMessage("La ganancia público de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("ganacia_contratista").notEmpty().isFloat().withMessage("La ganancia contratista de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("ganancias_stock").notEmpty().isFloat().withMessage("Las ganancias stock de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("foto").notEmpty().isString().withMessage("La foto de la variante es obligatorio y debe ser una cadena de texto").run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

  try {
    // Crear el producto
    const productoCreado = await prisma.productos.create({
      data: {
        categoriaId,
        estantesId,
      },
    });

    // Crear variante básica relacionada con el producto
    await prisma.variantes.create({
      data: {
        productoId: productoCreado.id,
        locacion_id,
        estantesId,
        nombre,
        codigo,
        color,
        descripcion,
        cantidad,
        medidas,
        precio_publico,
        precio_contratista,
        costo_compra,
        ganacia_publico,
        ganacia_contratista,
        ganancias_stock,
        foto,
      },
    });

    res.status(201).json("Producto y variante básica creados con éxito");
  } catch (error) {
    console.error("Error al crear el producto:", error);
    res.status(500).json({ error: "Error al crear el producto" });
  }
}

const crearVariante = async (req, res) => {
  
  const {estantesId, locacion_id, productoId, nombre, codigo, color, descripcion, cantidad, medidas, precio_publico, precio_contratista, costo_compra, ganacia_publico, ganacia_contratista, ganancias_stock, foto } = req.body;

    // Validar los datos de entrada variante
    await check("locacion_id").notEmpty().isInt().withMessage("El ID de locación es obligatorio y debe ser un número entero").run(req);
    await check("estantesId",).notEmpty().isInt().withMessage("El estantesId es obligatorio y debe ser un número entero").run(req);
    await check("productoId").notEmpty().isInt().withMessage("El productoId es obligatorio y debe ser un número entero").run(req);
    await check("nombre").notEmpty().isString().withMessage("El nombre de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("codigo").notEmpty().isString().withMessage("El código de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("color").notEmpty().isString().withMessage("El color de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("descripcion").notEmpty().isString().withMessage("La descripción de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("cantidad").notEmpty().isInt().withMessage("La cantidad de la variante es obligatorio y debe ser un número entero").run(req);
    await check("medidas").notEmpty().isString().withMessage("Las medidas de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("precio_publico").notEmpty().isFloat().withMessage("El precio público de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("precio_contratista").notEmpty().isFloat().withMessage("El precio contratista de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("costo_compra").notEmpty().isFloat().withMessage("El costo de compra de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("ganacia_publico").notEmpty().isFloat().withMessage("La ganancia público de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("ganacia_contratista").notEmpty().isFloat().withMessage("La ganancia contratista de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("ganancias_stock").notEmpty().isFloat().withMessage("Las ganancias stock de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("foto").notEmpty().isString().withMessage("La foto de la variante es obligatorio y debe ser una cadena de texto").run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

       await prisma.variantes.create({
      data: {
        productoId,
        locacion_id,
        estantesId,
        nombre,
        codigo,
        color,
        descripcion,
        cantidad,
        medidas,
        precio_publico,
        precio_contratista,
        costo_compra,
        ganacia_publico,
        ganacia_contratista,
        ganancias_stock,
        foto,
      },
    });

    res.status(201).json("Variante creada con éxito");
    } catch (error) {
      res.status(500).json({ error: "Error al crear la variante" });
    }
}

const updateVariante = async (req, res) => {
  
  const {varianteId} = req.params;
  const {estantesId, locacion_id, nombre, codigo, color, descripcion, cantidad, medidas, precio_publico, precio_contratista, costo_compra, ganacia_publico, ganacia_contratista, ganancias_stock, foto } = req.body;

    // Validar los datos de entrada variante
    await check("locacion_id").notEmpty().isInt().withMessage("El ID de locación es obligatorio y debe ser un número entero").run(req);
    await check("estantesId",).notEmpty().isInt().withMessage("El estantesId es obligatorio y debe ser un número entero").run(req);
    await check("productoId").notEmpty().isInt().withMessage("El productoId es obligatorio y debe ser un número entero").run(req);
    await check("nombre").notEmpty().isString().withMessage("El nombre de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("codigo").notEmpty().isString().withMessage("El código de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("color").notEmpty().isString().withMessage("El color de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("descripcion").notEmpty().isString().withMessage("La descripción de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("cantidad").notEmpty().isInt().withMessage("La cantidad de la variante es obligatorio y debe ser un número entero").run(req);
    await check("medidas").notEmpty().isString().withMessage("Las medidas de la variante es obligatorio y debe ser una cadena de texto").run(req);
    await check("precio_publico").notEmpty().isFloat().withMessage("El precio público de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("precio_contratista").notEmpty().isFloat().withMessage("El precio contratista de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("costo_compra").notEmpty().isFloat().withMessage("El costo de compra de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("ganacia_publico").notEmpty().isFloat().withMessage("La ganancia público de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("ganacia_contratista").notEmpty().isFloat().withMessage("La ganancia contratista de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("ganancias_stock").notEmpty().isFloat().withMessage("Las ganancias stock de la variante es obligatorio y debe ser un número decimal").run(req);
    await check("foto").notEmpty().isString().withMessage("La foto de la variante es obligatorio y debe ser una cadena de texto").run(req);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

       await prisma.variantes.update({
      where: { id: parseInt(varianteId) },
      data: {
        locacion_id,
        estantesId,
        nombre,
        codigo,
        color,
        descripcion,
        cantidad,
        medidas,
        precio_publico,
        precio_contratista,
        costo_compra,
        ganacia_publico,
        ganacia_contratista,
        ganancias_stock,
        foto,
      },
    });
    res.status(200).json("Variante actualizada con éxito");
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la variante" });
  }
}


/**
 * ============================
 * GET - Productos por categoría
 * ============================
 * /productos/categoria/:categoriaId
 */
const getProductosByCategoria = async (req, res) => {
  const { categoriaId } = req.params;

  try {
    const productos = await prisma.productos.findMany({
      where: {
        categoriaId: parseInt(categoriaId),
      },
      include: {
        categoria: true,
        estantes: {
          include: {
            ubicacion: true,
          },
        },
        variantes: true,
      },
    });

    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener productos por categoría" });
  }
};

/**
 * =====================================
 * GET - Producto específico con variantes
 * =====================================
 * /productos/:id
 */
const getProductoById = async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await prisma.productos.findUnique({
      where: { id: parseInt(id) },
      include: {
        categoria: true,
        estantes: {
          include: {
            ubicacion: true,
          },
        },
        variantes: true,
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

/**
 * =====================================
 * GET - Productos por parámetros de búsqueda
 * =====================================
 * /productos/buscar?nombre=&color=&codigo=&categoria=
 */
const getProductosBySearch = async (req, res) => {
  const { nombre, color, codigo, categoria } = req.query;

  try {
    const productos = await prisma.productos.findMany({
      where: {
        categoria: categoria
          ? { nombre: { contains: categoria, mode: "insensitive" } }
          : undefined,
        variantes: {
          some: {
            AND: [
              nombre
                ? { nombre: { contains: nombre, mode: "insensitive" } }
                : {},
              color
                ? { color: { contains: color, mode: "insensitive" } }
                : {},
              codigo
                ? { codigo: { contains: codigo, mode: "insensitive" } }
                : {},
            ],
          },
        },
      },
      include: {
        categoria: true,
        estantes: {
          include: {
            ubicacion: true,
          },
        },
        variantes: true,
      },
    });

    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al buscar productos" });
  }
};

export {
  createProducto,
  crearVariante,
  updateVariante,
  getProductosByCategoria,
  getProductoById,
  getProductosBySearch,
};


