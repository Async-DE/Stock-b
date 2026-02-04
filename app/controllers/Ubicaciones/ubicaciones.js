import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createUbicacion = async (req, res) => {
  const { nombre, calle, cp, colonia, celular } = req.body;

  // Validar los datos de entrada
  await check("nombre", "El nombre es obligatorio").notEmpty().run(req);
  await check("calle", "La calle es obligatoria").notEmpty().run(req);
  await check("cp", "El código postal es obligatorio").notEmpty().run(req);
  await check("colonia", "La colonia es obligatoria").notEmpty().run(req);
  await check("celular", "El celular es obligatorio").notEmpty().run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await prisma.ubicacion.create({
      data: {
        nombre,
        calle,
        cp,
        colonia,
        celular,
      },
    });

    res.status(201).json("Ubicación creada con éxito");
  } catch (error) {
    console.error("Error al crear la ubicación:", error);
    res.status(500).json({ error: "Error al crear la ubicación" });
  }
};

export { createUbicacion };
