import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createProducto = async (req, res) => {
  const { categoriaId,estantesId, ubicacion_id,nombre,codigo,color, descripcion,cantidad,medidas,precio_publico,precio_contratista,costo_compra,ganacia_publico,ganacia_contratista,ganancias_stock,foto } = req.body;

    // Validar los datos de entrada producto
    await check("categoriaId").notEmpty().isInt().withMessage("El ID de categoría es obligatorio y debe ser un número entero").run(req);
    await check("estantesId").notEmpty().isInt().withMessage("El estantesId es obligatorio y debe ser un número entero").run(req);

    // Validar los datos de entrada variante
    await check("ubicacion_id").notEmpty().isInt().withMessage("El ID de ubicación es obligatorio y debe ser un número entero").run(req);
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
    // Parsear valores numéricos
    const categoriaIdInt = parseInt(categoriaId, 10);
    const estantesIdInt = parseInt(estantesId, 10);
    const ubicacionIdInt = parseInt(ubicacion_id, 10);
    const cantidadInt = parseInt(cantidad, 10);
    const precioPublicoFloat = parseFloat(precio_publico);
    const precioContratistaFloat = parseFloat(precio_contratista);
    const costoCompraFloat = parseFloat(costo_compra);
    const gananciaPublicoFloat = parseFloat(ganacia_publico);
    const gananciaContratistaFloat = parseFloat(ganacia_contratista);
    const gananciasStockFloat = parseFloat(ganancias_stock);

    // Crear el producto
    const productoCreado = await prisma.productos.create({
      data: {
        categoriaId: categoriaIdInt,
      },
    });

    // Crear variante básica relacionada con el producto
    await prisma.variantes.create({
      data: {
        producto_id: productoCreado.id,
        ubicacion_id: ubicacionIdInt,
        estante_id: estantesIdInt,
        nombre,
        codigo,
        color,
        descripcion,
        cantidad: cantidadInt,
        medidas,
        precio_publico: precioPublicoFloat,
        precio_contratista: precioContratistaFloat,
        costo_compra: costoCompraFloat,
        ganacia_publico: gananciaPublicoFloat,
        ganacia_contratista: gananciaContratistaFloat,
        ganancias_stock: gananciasStockFloat,
        foto,
      },
    });

    res.status(200).json("Producto y variante básica creados con éxito");
  } catch (error) {
    console.error("Error al crear el producto:", error);
    res.status(500).json({ error: "Error al crear el producto" });
  }
}

const crearVariante = async (req, res) => {
  
  const {estantesId, ubicacion_id, productoId, nombre, codigo, color, descripcion, cantidad, medidas, precio_publico, precio_contratista, costo_compra, ganacia_publico, ganacia_contratista, ganancias_stock, foto } = req.body;

    // Validar los datos de entrada variante
    await check("ubicacion_id").notEmpty().isInt().withMessage("El ID de ubicación es obligatorio y debe ser un número entero").run(req);
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
    // Parsear valores numéricos
    const productoIdInt = parseInt(productoId, 10);
    const estantesIdInt = parseInt(estantesId, 10);
    const ubicacionIdInt = parseInt(ubicacion_id, 10);
    const cantidadInt = parseInt(cantidad, 10);
    const precioPublicoFloat = parseFloat(precio_publico);
    const precioContratistaFloat = parseFloat(precio_contratista);
    const costoCompraFloat = parseFloat(costo_compra);
    const gananciaPublicoFloat = parseFloat(ganacia_publico);
    const gananciaContratistaFloat = parseFloat(ganacia_contratista);
    const gananciasStockFloat = parseFloat(ganancias_stock);

       await prisma.variantes.create({
      data: {
        producto_id: productoIdInt,
        ubicacion_id: ubicacionIdInt,
        estante_id: estantesIdInt,
        nombre,
        codigo,
        color,
        descripcion,
        cantidad: cantidadInt,
        medidas,
        precio_publico: precioPublicoFloat,
        precio_contratista: precioContratistaFloat,
        costo_compra: costoCompraFloat,
        ganacia_publico: gananciaPublicoFloat,
        ganacia_contratista: gananciaContratistaFloat,
        ganancias_stock: gananciasStockFloat,
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
  const {estantesId, ubicacion_id, nombre, codigo, color, descripcion, cantidad, medidas, precio_publico, precio_contratista, costo_compra, ganacia_publico, ganacia_contratista, ganancias_stock, foto } = req.body;

    // Validar los datos de entrada variante
    await check("ubicacion_id").notEmpty().isInt().withMessage("El ID de ubicación es obligatorio y debe ser un número entero").run(req);
    await check("estantesId",).notEmpty().isInt().withMessage("El estantesId es obligatorio y debe ser un número entero").run(req);
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
    // Parsear valores numéricos
    const varianteIdInt = parseInt(varianteId, 10);
    const estantesIdInt = parseInt(estantesId, 10);
    const ubicacionIdInt = parseInt(ubicacion_id, 10);
    const cantidadInt = parseInt(cantidad, 10);
    const precioPublicoFloat = parseFloat(precio_publico);
    const precioContratistaFloat = parseFloat(precio_contratista);
    const costoCompraFloat = parseFloat(costo_compra);
    const gananciaPublicoFloat = parseFloat(ganacia_publico);
    const gananciaContratistaFloat = parseFloat(ganacia_contratista);
    const gananciasStockFloat = parseFloat(ganancias_stock);

       await prisma.variantes.update({
      where: { id: varianteIdInt },
      data: {
        ubicacion_id: ubicacionIdInt,
        estante_id: estantesIdInt,
        nombre,
        codigo,
        color,
        descripcion,
        cantidad: cantidadInt,
        medidas,
        precio_publico: precioPublicoFloat,
        precio_contratista: precioContratistaFloat,
        costo_compra: costoCompraFloat,
        ganacia_publico: gananciaPublicoFloat,
        ganacia_contratista: gananciaContratistaFloat,
        ganancias_stock: gananciasStockFloat,
        foto,
      },
    });
    res.status(200).json("Variante actualizada con éxito");

  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la variante", details: error.message });
  }
}

const getProductosByCategoria = async (req, res) => {
  const { categoriaId } = req.params;

  try {
    const productos = await prisma.productos.findMany({
      where: {
        categoriaId: parseInt(categoriaId),
      },
      include: {
        categoria: {
          select: {
            nombre: true,
          }
        },
        variantes:{
          select: {
            nombre: true,
            color: true,
            medidas: true
          }
        },
      },
    });

    if (productos.length === 0) {
      return res.status(404).json({ error: "No se Encontraron productos para esta categoría" });
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
        categoria: {
          select: {
            nombre: true,
          }
        },
        variantes: true,
      },
    });

    if (producto.length === 0) {
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
            { categoria: { nombre: { contains: search, mode: "insensitive" } } },
            {
                variantes: {
                    some: {
                        OR: [
                            { nombre: { contains: search, mode: "insensitive" } },
                            { color: { contains: search, mode: "insensitive" } },
                            { codigo: { contains: search, mode: "insensitive" } }
                        ]
                    }
                }
            }
        ]
      },
      include: {
        categoria: {
          select: {
            nombre: true,
          }
        },
        variantes: {
            select: {
                nombre: true,
                color: true,
                medidas: true
            }
        },
      },
    });

    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al buscar productos:", error);
    res.status(500).json({ error: "Error al buscar productos", details: error.message });
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


