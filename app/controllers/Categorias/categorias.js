import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createCategoria = async (req, res) => {
  const { nombre } = req.body;

  // Validar los datos de entrada
  await check("nombre", "El nombre es obligatorio").notEmpty().run(req);

  //Validar tipos de datos
  await check("nombre", "El nombre debe ser una cadena de texto").isString().run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await prisma.categorias.create({
      data: {
        nombre
      },
    });

    res.status(201).json("Categoría creada con éxito");
  } catch (error) {
    console.error("Error al crear la categoría:", error);
    res.status(500).json({ error: "Error al crear la categoría" });
  }
};

const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const categoriaExistente = await prisma.categorias.findUnique({
      where: { id: parseInt(id) },
    });
    if (!categoriaExistente) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }
    await prisma.categorias.update({
      where: { id: parseInt(id) },
      data: { nombre },
    });
    res.status(200).json("Categoría actualizada con éxito");
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
    res.status(500).json({ error: "Error al actualizar la categoría" });
  }
};

export { createCategoria, updateCategoria };
