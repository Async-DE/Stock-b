import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createUbicacion = async (req, res) => {
  const { nombre, calle, cp, colonia, celular } = req.body;

  // Validar los datos de entrada
  await check("nombre")
    .notEmpty()
    .isString()
    .withMessage("El nombre es obligatorio y debe ser una cadena de texto")
    .run(req);
  await check("calle")
    .notEmpty()
    .isString()
    .withMessage("La calle es obligatoria y debe ser una cadena de texto")
    .run(req);
  await check("cp")
    .notEmpty()
    .isString()
    .withMessage(
      "El código postal es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("colonia")
    .notEmpty()
    .isString()
    .withMessage("La colonia es obligatoria y debe ser una cadena de texto")
    .run(req);
  await check("celular")
    .notEmpty()
    .isString()
    .withMessage("El celular es obligatorio y debe ser una cadena de texto")
    .run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const ubicacion = await prisma.ubicacion.create({
      data: {
        nombre,
        calle,
        cp,
        colonia,
        celular,
      },
    });

    // Registrar en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: req.user.id,
        accion: "CREATE",
        ubicacionId: ubicacion.id,
      },
    });

    res.status(201).json(ubicacion);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la ubicación" });
  }
};

const updateUbicacion = async (req, res) => {
  const { id } = req.params;
  const { nombre, calle, cp, colonia, celular } = req.body;

  // Validar los datos de entrada
  await check("nombre")
    .notEmpty()
    .isString()
    .withMessage("El nombre es obligatorio y debe ser una cadena de texto")
    .run(req);
  await check("calle")
    .notEmpty()
    .isString()
    .withMessage("La calle es obligatoria y debe ser una cadena de texto")
    .run(req);
  await check("cp")
    .notEmpty()
    .isString()
    .withMessage(
      "El código postal es obligatorio y debe ser una cadena de texto",
    )
    .run(req);
  await check("colonia")
    .notEmpty()
    .isString()
    .withMessage("La colonia es obligatoria y debe ser una cadena de texto")
    .run(req);
  await check("celular")
    .notEmpty()
    .isString()
    .withMessage("El celular es obligatorio y debe ser una cadena de texto")
    .run(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const ubicacionExistente = await prisma.ubicacion.findUnique({
      where: { id: parseInt(id) },
    });
    if (!ubicacionExistente) {
      return res.status(404).json({ error: "Ubicación no encontrada" });
    }
    const ubicacionActualizada = await prisma.ubicacion.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        calle,
        cp,
        colonia,
        celular,
      },
    });

    // Registrar en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: req.user.id,
        accion: "UPDATE",
        ubicacionId: parseInt(id),
      },
    });

    res.status(200).json(ubicacionActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la ubicación" });
  }
};

const getUbicaciones = async (req, res) => {
  try {
    const ubicaciones = await prisma.ubicacion.findMany({
      include: {
        estantes: true,
      },
    });
    res.status(200).json(ubicaciones);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las ubicaciones" });
  }
};

export { createUbicacion, updateUbicacion, getUbicaciones };
