import bcrypt from "bcryptjs";
import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

/* =========================
   CREATE USUARIO
   ========================= */
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

    // Auditoría
    // TODO: cuando exista auth, usar req.user.id
    await prisma.auditoria.create({
      data: {
        usuario_id: nuevoUsuario.id,
        accion: "CREATE",
      },
    });

    // No devolver password
    const { password: _, ...usuarioSeguro } = nuevoUsuario;

    res.status(201).json(usuarioSeguro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

/* =========================
   UPDATE ESTADO USUARIO
   ========================= */
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
      data: { estado },
    });

    // Auditoría
    // TODO: reemplazar usuarioActualizado.id por req.user.id cuando exista auth
    await prisma.auditoria.create({
      data: {
        usuario_id: usuarioActualizado.id,
        accion: "UPDATE",
      },
    });

    const { password: _, ...usuarioSeguro } = usuarioActualizado;

    res.status(200).json(usuarioSeguro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar estado del usuario" });
  }
};

/* =========================
   GET ALL USUARIOS (FILTROS)
   ========================= */
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

/* =========================
   AUDITORÍA GENERAL (últimas 20)
   ========================= */
const getAuditoriaGeneral = async (_req, res) => {
  try {
    const auditorias = await prisma.auditoria.findMany({
      take: 20,
      orderBy: { createdAt: "desc" },
      include: {
        usuario: {
          select: {
            id: true,
            nombre: true,
            usuario: true,
          },
        },
      },
    });

    res.status(200).json(auditorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener auditoría" });
  }
};

/* =========================
   AUDITORÍA POR USUARIO (últimas 20)
   ========================= */
const getAuditoriaPorUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const auditorias = await prisma.auditoria.findMany({
      where: { usuario_id: parseInt(id) },
      take: 20,
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(auditorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener auditoría del usuario" });
  }
};

export {
  createUsuario,
  updateEstadoUsuario,
  getUsuarios,
  getAuditoriaGeneral,
  getAuditoriaPorUsuario,
};
