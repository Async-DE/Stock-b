import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createCategoria = async (req, res) => {
  const { nombre } = req.body;

  // Validar los datos de entrada
  await check("nombre").notEmpty().isString().withMessage("El nombre es obligatorio y debe ser una cadena de texto").run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Errores de validación", errors: errors.array() });
  }

  var categoriaExistente = await prisma.categorias.findUnique({
    where: { nombre },
  });
  if (categoriaExistente) {
    return res.status(400).json({ message: "La categoría ya existe", error: "La categoría ya existe" });
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

    return res.status(201).json({ message: "Categoría creada con éxito", data: nuevaCategoria });
  } catch (error) {
    return res.status(500).json({ message: "Error al crear la categoría", error: "Error al crear la categoría" });
  }
};

const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  // Validar los datos de entrada
  await check("nombre").notEmpty().isString().withMessage("El nombre es obligatorio y debe ser una cadena de texto").run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Errores de validación", errors: errors.array() });
  }

  try {
    const categoriaExistente = await prisma.categorias.findUnique({
      where: { id: parseInt(id) },
    });
    if (!categoriaExistente) {
      return res.status(404).json({ message: "Categoría no encontrada", error: "Categoría no encontrada" });
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

    const categoriaActualizada = await prisma.categorias.findUnique({
      where: { id: parseInt(id) },
    });
    return res.status(200).json({ message: "Categoría actualizada con éxito", data: categoriaActualizada });
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar la categoría", error: "Error al actualizar la categoría" });
  }
};

const getCategorias = async (req, res) => {
  try {
    const categorias = await prisma.categorias.findMany({
      include: {
        subcategorias: true
      }
    });

    return res.status(200).json({ message: "Categorías obtenidas con éxito", data: categorias });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al obtener categorías", error: "Error al obtener categorías" });
  }
};

export { createCategoria, updateCategoria, getCategorias };
