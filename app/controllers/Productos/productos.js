import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createProducto = async (req, res) => {
  const { categoriaId,estantesId, locacion_id,nombre,codigo,color, descripcion,cantidad,medidas,precio_publico,precio_contratista,costo_compra,ganacia_publico,ganacia_contratista,ganancias_stock,foto } = req.body;

    // Validar los datos de entrada producto
    await check("categoriaId", "El ID de categoría es obligatorio").notEmpty().run(req);
    await check("estantesId", "El ID de estante es obligatorio").notEmpty().run(req);

    // Validar los datos de entrada variante
    await check("locacion_id", "El ID de locación es obligatorio").notEmpty().run(req);
    await check("nombre", "El nombre de la variante es obligatorio").notEmpty().run(req);
    await check("codigo", "El código de la variante es obligatorio").notEmpty().run(req);
    await check("color", "El color de la variante es obligatorio").notEmpty().run(req);
    await check("descripcion", "La descripción de la variante es obligatorio").notEmpty().run(req);
    await check("cantidad", "La cantidad de la variante es obligatorio").notEmpty().run(req);
    await check("medidas", "Las medidas de la variante es obligatorio").notEmpty().run(req);
    await check("precio_publico", "El precio público de la variante es obligatorio").notEmpty().run(req);
    await check("precio_contratista", "El precio contratista de la variante es obligatorio").notEmpty().run(req);
    await check("costo_compra", "El costo de compra de la variante es obligatorio").notEmpty().run(req);
    await check("ganacia_publico", "La ganancia público de la variante es obligatorio").notEmpty().run(req);
    await check("ganacia_contratista", "La ganancia contratista de la variante es obligatorio").notEmpty().run(req);
    await check("ganancias_stock", "Las ganancias stock de la variante es obligatorio").notEmpty().run(req);
    await check("foto", "La foto de la variante es obligatorio").notEmpty().run(req);

    //Validar tipos de datos producto
    await check("categoriaId", "El ID de categoría debe ser un número entero").isInt().run(req);
    await check("estantesId", "El ID de estante debe ser un número entero").isInt().run(req);

    //Validar tipos de datos variante
    await check("locacion_id", "El ID de locación debe ser un número entero").isInt().run(req);
    await check("nombre", "El nombre de la variante debe ser una cadena de texto").isString().run(req);
    await check("codigo", "El código de la variante debe ser una cadena de texto").isString().run(req);
    await check("color", "El color de la variante debe ser una cadena de texto").isString().run(req);
    await check("descripcion", "La descripción de la variante debe ser una cadena de texto").isString().run(req);
    await check("cantidad", "La cantidad de la variante debe ser un número entero").isInt().run(req);
    await check("medidas", "Las medidas de la variante debe ser una cadena de texto").isString().run(req);
    await check("precio_publico", "El precio público de la variante debe ser un número decimal").isFloat().run(req);
    await check("precio_contratista", "El precio contratista de la variante debe ser un número decimal").isFloat().run(req);
    await check("costo_compra", "El costo de compra de la variante debe ser un número decimal").isFloat().run(req);
    await check("ganacia_publico", "La ganancia público de la variante debe ser un número decimal").isFloat().run(req);
    await check("ganacia_contratista", "La ganancia contratista de la variante debe ser un número decimal").isFloat().run(req);
    await check("ganancias_stock", "Las ganancias stock de la variante debe ser un número decimal").isFloat().run(req);
    await check("foto", "La foto de la variante debe ser una cadena de texto").isString().run(req);

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
};

export { createProducto };
