import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createEstante = async (req, res) => {
  const { pasillo, seccion, nivel, ubicacionId } = req.body;

  await check("pasillo").notEmpty().isInt().withMessage("Pasillo inválido").run(req);
  await check("nivel").notEmpty().isInt().withMessage("Nivel inválido").run(req);
  await check("seccion").notEmpty().isString().withMessage("Sección inválida").run(req);

  if (ubicacionId !== undefined) {
    await check("ubicacionId").isInt().withMessage("Ubicación inválida").run(req);
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const pasilloInt = parseInt(pasillo, 10);
    const nivelInt = parseInt(nivel, 10);
    const ubicacionIdInt = ubicacionId ? parseInt(ubicacionId, 10) : null;

    if (ubicacionIdInt) {
      const existeUbicacion = await prisma.ubicacion.findUnique({
        where: { id: ubicacionIdInt },
      });

      if (!existeUbicacion) {
        return res.status(404).json({ error: "La ubicación no existe" });
      }
    }

    const estante = await prisma.estantes.create({
      data: {
        pasillo: pasilloInt,
        nivel: nivelInt,
        Seccion: seccion,
        ubicacionId: ubicacionIdInt,
      },
      include: {
        ubicacion: true,
      },
    });

    // Registrar en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: req.user.id,
        accion: 'CREATE',
        estanteId: estante.id
      }
    });

    res.status(201).json(estante);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el estante" });
  }
};

const getEstantes = async (req, res) => {
  try {
    const estantes = await prisma.estantes.findMany({
      include: {
        ubicacion: true,
      },
    });

    res.status(200).json(estantes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener estantes" });
  }
};

const getEstanteById = async (req, res) => {
  const { id } = req.params;

  try {
    const estante = await prisma.estantes.findUnique({
      where: { id: parseInt(id) },
      include: {
        ubicacion: true,
      },
    });

    if (!estante) {
      return res.status(404).json({ error: "Estante no encontrado" });
    }

    res.status(200).json(estante);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el estante" });
  }
};

export { createEstante, getEstantes, getEstanteById };
