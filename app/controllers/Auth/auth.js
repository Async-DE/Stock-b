import prisma from '../../../prisma/prismaClient.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';

/**
 * Login - Autentica usuario y genera token JWT
 */
const login = async (req, res) => {
  const { usuario_email, password } = req.body;

  // Validaciones
  await check('usuario_email')
    .notEmpty()
    .isString()
    .withMessage('El usuario o email/teléfono es obligatorio')
    .run(req);

  await check('password')
    .notEmpty()
    .isString()
    .withMessage('La contraseña es obligatoria')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Errores de validación", errors: errors.array() });
  }

  try {
    // Buscar usuario por nombre de usuario o email_phone
    const usuario = await prisma.usuario.findFirst({
      where: {
        OR: [
          { usuario: usuario_email },
          { email_phone: usuario_email }
        ]
      }
    });

    if (!usuario) {
      return res.status(401).json({ 
        message: 'Usuario o contraseña incorrectos',
        error: 'Usuario o contraseña incorrectos' 
      });
    }

    // Verificar que el usuario esté activo
    if (!usuario.estado) {
      return res.status(403).json({ 
        message: 'Usuario inactivo',
        error: 'Usuario inactivo' 
      });
    }

    // Verificar contraseña
    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) {
      return res.status(401).json({ 
        message: 'Usuario o contraseña incorrectos',
        error: 'Usuario o contraseña incorrectos' 
      });
    }

    // Generar JWT sin expiración
    const token = jwt.sign(
      {
        usuarioId: usuario.id,
        usuario: usuario.usuario,
        email_phone: usuario.email_phone
      },
      process.env.JWT_SECRET
    );

    // Guardar sesión en BD
    const sesion = await prisma.sesion.create({
      data: {
        usuario_id: usuario.id,
        token: token
      }
    });

    // Registrar login en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: usuario.id,
        accion: 'LOGIN'
      }
    });

    // Responder sin incluir password
    const { password: _, ...usuarioSeguro } = usuario;

    return res.status(200).json({
      message: 'Login exitoso',
      data: {
        token,
        usuario: usuarioSeguro
      }
    });

  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ 
      message: 'Error al iniciar sesión',
      error: 'Error al iniciar sesión' 
    });
  }
};

/**
 * Logout - Revoca el token actual
 */
const logout = async (req, res) => {
  try {
    const usuarioId = req.user.id;
    const token = req.token;

    // Revocar la sesión actual
    await prisma.sesion.update({
      where: { token },
      data: { revocado: true }
    });

    // Registrar logout en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: usuarioId,
        accion: 'LOGOUT'
      }
    });

    return res.status(200).json({ 
      message: 'Logout exitoso' 
    });

  } catch (error) {
    console.error('Error en logout:', error);
    return res.status(500).json({ 
      message: 'Error al cerrar sesión',
      error: 'Error al cerrar sesión' 
    });
  }
};

/**
 * Revocar todas las sesiones de un usuario (para forzar logout en todos lados)
 * Útil en caso de cambio de contraseña o compromiso de cuenta
 */
const revocarTodasLasSesiones = async (req, res) => {
  try {
    const usuarioId = req.user.id;

    // Revocar todas las sesiones activas del usuario
    await prisma.sesion.updateMany({
      where: {
        usuario_id: usuarioId,
        revocado: false
      },
      data: { revocado: true }
    });

    // Registrar en auditoría
    await prisma.auditoria.create({
      data: {
        usuario_id: usuarioId,
        accion: 'LOGOUT'
      }
    });

    return res.status(200).json({ 
      message: 'Todas las sesiones han sido revocadas' 
    });

  } catch (error) {
    console.error('Error al revocar sesiones:', error);
    return res.status(500).json({ 
      message: 'Error al revocar sesiones',
      error: 'Error al revocar sesiones' 
    });
  }
};

export { login, logout, revocarTodasLasSesiones };
