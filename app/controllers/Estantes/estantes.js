import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

/**
 * Crear estante
 */
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
    if (ubicacionId) {
      const existeUbicacion = await prisma.ubicacion.findUnique({
        where: { id: ubicacionId },
      });

      if (!existeUbicacion) {
        return res.status(404).json({ error: "La ubicación no existe" });
      }
    }

    const estante = await prisma.estantes.create({
      data: {
        pasillo,
        nivel,
        Seccion: seccion,
        ubicacionId: ubicacionId ?? null,
      },
    });

    res.status(201).json(estante);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el estante" });
  }
};

/**
 * Obtener todos los estantes
 */
const getEstantes = async (_req, res) => {
  try {
    const estantes = await prisma.estantes.findMany({
      include: {
        ubicacion: true,
        productos: true,
      },
    });

    res.status(200).json(estantes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener estantes" });
  }
};

/**
 * Obtener estante por ID
 */
const getEstanteById = async (req, res) => {
  const { id } = req.params;

  try {
    const estante = await prisma.estantes.findUnique({
      where: { id: parseInt(id) },
      include: {
        ubicacion: true,
        productos: true,
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
