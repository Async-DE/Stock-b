import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createCategoria = async (req, res) => {
  const { nombre } = req.body;

  // Validar los datos de entrada
  await check("nombre").notEmpty().isString().withMessage("El nombre es obligatorio y debe ser una cadena de texto").run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  var categoriaExistente = await prisma.categorias.findUnique({
    where: { nombre },
  });
  if (categoriaExistente) {
    return res.status(400).json({ error: "La categoría ya existe" });
  }

  try {
    const nuevaCategoria = await prisma.categorias.create({
      data: {
        nombre
      },
    });

    // Registrar en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: req.user.id,
        accion: 'CREATE',
        categoriaId: nuevaCategoria.id
      }
    });

    res.status(201).json("Categoría creada con éxito");
  } catch (error) {
    res.status(500).json({ error: "Error al crear la categoría" });
  }
};

const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  // Validar los datos de entrada
  await check("nombre").notEmpty().isString().withMessage("El nombre es obligatorio y debe ser una cadena de texto").run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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

    // Registrar en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: req.user.id,
        accion: 'UPDATE',
        categoriaId: parseInt(id)
      }
    });

    res.status(200).json("Categoría actualizada con éxito");
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la categoría" });
  }
};

const getCategorias = async (req, res) => {
  try {
    const categorias = await prisma.categorias.findMany({
      include: {
        subcategorias: true
      }
    });
    res.status(200).json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener categorías" });
  }
};

export { createCategoria, updateCategoria, getCategorias };
