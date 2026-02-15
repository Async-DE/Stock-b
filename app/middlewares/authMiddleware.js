import jwt from 'jsonwebtoken';
import prisma from '../../prisma/prismaClient.js';

/**
 * Middleware de autenticación JWT
 * Valida el token y verifica que no esté revocado
 */
export const authMiddleware = async (req, res, next) => {
  try {
    // Extraer token del header Authorization
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        message: 'Token no proporcionado o formato inválido',
        error: 'Token no proporcionado o formato inválido' 
      });
    }

    const token = authHeader.substring(7); // Remover "Bearer "

    // Verificar y decodificar el JWT
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ 
        message: 'Token inválido o expirado',
        error: 'Token inválido o expirado' 
      });
    }

    // Verificar que el token no esté revocado en BD
    const sesion = await prisma.sesion.findUnique({
      where: { token },
      include: { usuario: true }
    });

    if (!sesion) {
      return res.status(401).json({ 
        message: 'Sesión no encontrada',
        error: 'Sesión no encontrada' 
      });
    }

    if (sesion.revocado) {
      return res.status(401).json({ 
        message: 'Sesión revocada',
        error: 'Sesión revocada' 
      });
    }

    // Verificar que el usuario exista y esté activo
    if (!sesion.usuario || !sesion.usuario.estado) {
      return res.status(401).json({ 
        message: 'Usuario inactivo o no encontrado',
        error: 'Usuario inactivo o no encontrado' 
      });
    }

    // Adjuntar información del usuario al request
    req.user = {
      id: decoded.usuarioId,
      usuario: decoded.usuario,
      email_phone: decoded.email_phone
    };
    req.token = token;

    next();
  } catch (error) {
    console.error('Error en middleware de autenticación:', error);
    return res.status(500).json({ 
      message: 'Error al validar autenticación',
      error: 'Error al validar autenticación' 
    });
  }
};
