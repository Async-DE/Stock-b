import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/* =========================
   CREATE USUARIO
   ========================= */
export const createUsuario = async (req, res) => {
  try {
    const { nombre, usuario, email_phone, password } = req.body;

    if (!nombre || !usuario || !email_phone || !password) {
      return res.status(400).json({ message: 'Datos incompletos' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        usuario,
        email_phone,
        password: hashedPassword
      }
    });

    // Auditoría
    // TODO: cuando exista auth, usar req.user.id
    await prisma.auditoria.create({
      data: {
        usuario_id: nuevoUsuario.id,
        accion: 'CREATE'
      }
    });

    // No devolver password
    const { password: _, ...usuarioSeguro } = nuevoUsuario;

    res.status(201).json(usuarioSeguro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear usuario' });
  }
};

/* =========================
   UPDATE ESTADO USUARIO
   ========================= */
export const updateEstadoUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    if (typeof estado !== 'boolean') {
      return res.status(400).json({ message: 'Estado inválido' });
    }

    const usuarioActualizado = await prisma.usuario.update({
      where: { id: Number(id) },
      data: { estado }
    });

    // Auditoría
    // TODO: reemplazar usuarioActualizado.id por req.user.id cuando exista auth
    await prisma.auditoria.create({
      data: {
        usuario_id: usuarioActualizado.id,
        accion: 'UPDATE'
      }
    });

    const { password: _, ...usuarioSeguro } = usuarioActualizado;

    res.json(usuarioSeguro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar estado' });
  }
};

/* =========================
   GET ALL USUARIOS (FILTROS)
   ========================= */
export const getUsuarios = async (req, res) => {
  try {
    const { estado } = req.query;

    const where = {};
    if (estado !== undefined) {
      where.estado = estado === 'true';
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
        updatedAt: true
      }
    });

    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
};

/* =========================
   AUDITORÍA GENERAL (últimas 20)
   ========================= */
export const getAuditoriaGeneral = async (_req, res) => {
  try {
    const auditorias = await prisma.auditoria.findMany({
      take: 20,
      orderBy: { createdAt: 'desc' },
      include: {
        usuario: {
          select: {
            id: true,
            nombre: true,
            usuario: true
          }
        }
      }
    });

    res.json(auditorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener auditoría' });
  }
};

/* =========================
   AUDITORÍA POR USUARIO (últimas 20)
   ========================= */
export const getAuditoriaPorUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const auditorias = await prisma.auditoria.findMany({
      where: { usuario_id: Number(id) },
      take: 20,
      orderBy: { createdAt: 'desc' }
    });

    res.json(auditorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener auditoría del usuario' });
  }
};
