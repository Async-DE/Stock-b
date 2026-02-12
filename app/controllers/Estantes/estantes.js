import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createEstante = async (req, res) => {
  const { pasillo, seccion, niveles, ubicacionId } = req.body;

  await check("pasillo")
    .notEmpty()
    .isInt({ min: 0 })
    .withMessage("Pasillo inválido")
    .run(req);
  await check("niveles")
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage("Cantidad de niveles inválida (mínimo 1)")
    .run(req);
  await check("seccion")
    .notEmpty()
    .isString()
    .trim()
    .withMessage("Sección inválida")
    .run(req);
  await check("ubicacionId").isInt().withMessage("Ubicación inválida").run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const pasilloInt = parseInt(pasillo, 10);
    const nivelInt = parseInt(niveles, 10);
    const ubicacionIdInt = parseInt(ubicacionId, 10);

    const existeUbicacion = await prisma.ubicacion.findUnique({
      where: { id: ubicacionIdInt },
    });

    if (!existeUbicacion) {
      return res.status(404).json({ error: "La ubicación no existe" });
    }

    // Usar transacción para garantizar atomicidad
    const result = await prisma.$transaction(async (tx) => {
      const estante = await tx.estantes.create({
        data: {
          pasillo: pasilloInt,
          Seccion: seccion,
          ubicacionId: ubicacionIdInt,
        },
      });

      const nivelesData = Array.from({ length: nivelInt }, (_, i) => ({
        estantesId: estante.id,
        niveles: i + 1,
      }));

      const nivelesCreados = await tx.niveles.createMany({
        data: nivelesData,
      });

      // Registrar en auditoría
      await tx.auditoria.create({
        data: {
          usuario_id: req.user.id,
          accion: "CREATE",
          estanteId: estante.id,
        },
      });

      return { estante, nivelesCreados };
    });

    // Obtener el estante completo con sus niveles
    const estanteCompleto = await prisma.estantes.findUnique({
      where: { id: result.estante.id },
      include: {
        niveles: true,
        ubicacion: true,
      },
    });

    res.status(201).json(estanteCompleto);
  } catch (error) {
    console.error("Error al crear el estante:", error);
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
