import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createUbicacion = async (req, res) => {
  const { nombre, calle, cp, colonia, celular } = req.body;

  // Validar los datos de entrada
  await check("nombre").notEmpty().isString().withMessage("El nombre es obligatorio y debe ser una cadena de texto").run(req);
  await check("calle").notEmpty().isString().withMessage("La calle es obligatoria y debe ser una cadena de texto").run(req);
  await check("cp").notEmpty().isString().withMessage("El código postal es obligatorio y debe ser una cadena de texto").run(req);
  await check("colonia").notEmpty().isString().withMessage("La colonia es obligatoria y debe ser una cadena de texto").run(req);
  await check("celular").notEmpty().isString().withMessage("El celular es obligatorio y debe ser una cadena de texto").run(req);
  
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
