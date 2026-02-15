import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createSubCategoria = async (req, res) => {
  const { nombre, categoriaId } = req.body;

  await check("nombre").notEmpty().isString().withMessage("El nombre es obligatorio").run(req);
  await check("categoriaId").notEmpty().isInt().withMessage("El ID de categoría es obligatorio").run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Errores de validación", errors: errors.array() });
  }

  try {
    const nuevaSubCategoria = await prisma.subcategorias.create({
      data: {
        nombre,
        categoriaId: parseInt(categoriaId),
        ganancias_ventas: 0,
        ganancias_stock: 0
      },
    });

    // Registrar en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: req.user.id,
        accion: 'CREATE',
        subcategoriaId: nuevaSubCategoria.id
      }
    });

    return res.status(201).json({ message: "Subcategoría creada exitosamente", data: nuevaSubCategoria });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al crear subcategoría", error: "Error al crear subcategoría" });
  }
};

const updateSubCategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    await check("nombre").notEmpty().isString().withMessage("El nombre es obligatorio").run(req);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Errores de validación", errors: errors.array() });
    }

    try {
        const subcategoria = await prisma.subcategorias.update({
            where: { id: parseInt(id) },
            data: { nombre }
        });

        // Registrar en auditoría
        await prisma.auditoria.create({
            data: {
                usuario_id: req.user.id,
                accion: 'UPDATE',
                subcategoriaId: parseInt(id)
            }
        });

        return res.status(200).json({ message: "Subcategoría actualizada exitosamente", data: subcategoria });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al actualizar subcategoría", error: "Error al actualizar subcategoría" });
    }
}

export { createSubCategoria, updateSubCategoria };
