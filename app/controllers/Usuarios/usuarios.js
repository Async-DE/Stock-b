import bcrypt from "bcryptjs";
import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createUsuario = async (req, res) => {
  await check("nombre")
    .notEmpty()
    .isString()
    .withMessage("El nombre es obligatorio")
    .run(req);

  await check("usuario")
    .notEmpty()
    .isString()
    .withMessage("El usuario es obligatorio")
    .run(req);

  await check("email_phone")
    .notEmpty()
    .isString()
    .withMessage("El email o teléfono es obligatorio")
    .run(req);

  await check("password")
    .notEmpty()
    .isString()
    .withMessage("La contraseña es obligatoria")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { nombre, usuario, email_phone, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        usuario,
        email_phone,
        password: hashedPassword,
      },
    });

    await prisma.auditoria.create({
      data: {
        usuario_id: nuevoUsuario.id,
        accion: "CREATE",
      },
    });

    const { password: _, ...usuarioSeguro } = nuevoUsuario;

    res.status(201).json(usuarioSeguro);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

const updateEstadoUsuario = async (req, res) => {
  const { id } = req.params;

  await check("estado")
    .isBoolean()
    .withMessage("El estado debe ser booleano")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { estado } = req.body;


    const usuarioActualizado = await prisma.usuario.update({
      where: { id: parseInt(id) },
      data: { estado: estado === 'true' || estado === true }, // Manejar string "true" o booleano real
    });

    // Registrar en auditoría (usuario que realiza la acción, no el usuario modificado)
    await prisma.auditoria.create({
      data: {
        usuario_id: req.user.id,
        accion: "UPDATE",
      },
    });

    const { password: _, ...usuarioSeguro } = usuarioActualizado;

    res.status(200).json(usuarioSeguro);
  } catch (error) {
    console.error("Error al actualizar estado:", error);
    res.status(500).json({ error: "Error al actualizar estado del usuario", details: error.message });
  }
};

const getUsuarios = async (req, res) => {
  try {
    const { estado } = req.query;

    const where = {};
    if (estado !== undefined) {
      where.estado = estado === "true";
    }

    const usuarios = await prisma.usuario.findMany({
      where,
      select: {
        id: true,
        nombre: true,
        usuario: true,
        email_phone: true,
        estado: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

export {
  createUsuario,
  updateEstadoUsuario,
  getUsuarios,
};
