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
    return res.status(400).json({ message: "Errores de validación", errors: errors.array() });
  }

  try {
    const pasilloInt = parseInt(pasillo, 10);
    const nivelInt = parseInt(niveles, 10);
    const ubicacionIdInt = parseInt(ubicacionId, 10);

    const existeUbicacion = await prisma.ubicacion.findUnique({
      where: { id: ubicacionIdInt },
    });

    if (!existeUbicacion) {
      return res.status(404).json({ message: "La ubicación no existe", error: "La ubicación no existe" });
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

    return res.status(201).json({ message: "Estante creado exitosamente", data: estanteCompleto });
  } catch (error) {
    console.error("Error al crear el estante:", error);
    return res.status(500).json({ message: "Error al crear el estante", error: "Error al crear el estante" });
  }
};

const getEstantes = async (req, res) => {
  try {
    const estantes = await prisma.estantes.findMany({
      include: {
        ubicacion: true,
      },
    });

    return res.status(200).json({ message: "Estantes obtenidos exitosamente", data: estantes });
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener estantes", error: "Error al obtener estantes" });
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
      return res.status(404).json({ message: "Estante no encontrado", error: "Estante no encontrado" });
    }

    return res.status(200).json({ message: "Estante obtenido exitosamente", data: estante });
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener el estante", error: "Error al obtener el estante" });
  }
};

export { createEstante, getEstantes, getEstanteById };
