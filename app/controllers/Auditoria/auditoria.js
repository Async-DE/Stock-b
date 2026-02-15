import prisma from "../../../prisma/prismaClient.js";

const includeAuditoriaRelacion = {
  usuario: {
    select: {
      id: true,
      nombre: true,
      usuario: true,
      email_phone: true,
    },
  },
  categoria: true,
  subcategoria: true,
  estante: true,
  producto: true,
  variante: { select: { id: true, nombre: true, codigo: true, color: true, medidas: true } },
  venta: true,
};

const parsePagination = (query) => {
  const take = parseInt(query.take, 10);
  const skip = parseInt(query.skip, 10);

  return {
    take: Number.isNaN(take) ? 20 : Math.min(Math.max(take, 1), 100),
    skip: Number.isNaN(skip) ? 0 : Math.max(skip, 0),
  };
};

const limpiarAuditorias = (auditorias) =>
  auditorias.map((auditoria) =>
    Object.fromEntries(
      Object.entries(auditoria).filter(([_, value]) => value !== null)
    )
  );

const getAuditoriaGeneral = async (_req, res) => {
  try {
    const { take, skip } = parsePagination(_req.query);
    const auditorias = await prisma.auditoria.findMany({
      take,
      skip,
      orderBy: { createdAt: "desc" },
      include: includeAuditoriaRelacion,
    });

    return res.status(200).json({ message: "Auditoría obtenida exitosamente", data: limpiarAuditorias(auditorias) });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener auditoria",
      error: "Error al obtener auditoria",
      details: error.message,
    });
  }
};

const getAuditoriaPorUsuario = async (req, res) => {
  const { id } = req.params;
  const usuarioId = parseInt(id, 10);

  if (Number.isNaN(usuarioId)) {
    return res.status(400).json({ message: "El ID de usuario es inválido", error: "El ID de usuario es inválido" });
  }

  try {
    const { take, skip } = parsePagination(req.query);
    const auditorias = await prisma.auditoria.findMany({
      where: { usuario_id: usuarioId },
      take,
      skip,
      orderBy: { createdAt: "desc" },
      include: includeAuditoriaRelacion,
    });

    return res.status(200).json({ message: "Auditoría obtenida exitosamente", data: limpiarAuditorias(auditorias) });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener auditoria del usuario",
      error: "Error al obtener auditoria del usuario",
      details: error.message,
    });
  }
};

const entidadMap = {
  categorias: "categoriaId",
  subcategorias: "subcategoriaId",
  estantes: "estanteId",
  ubicaciones: "ubicacionId",
  productos: "productoId",
  variantes: "varianteId",
  ventas: "ventaId",
};

const getAuditoriaPorEntidad = async (req, res) => {
  const { entidad, id } = req.params;
  const entidadKey = entidadMap[entidad];
  const entidadId = parseInt(id, 10);

  if (!entidadKey) {
    return res.status(400).json({
      message: "Entidad inválida",
      error: "Entidad inválida",
      entidadesValidas: Object.keys(entidadMap),
    });
  }

  if (Number.isNaN(entidadId)) {
    return res.status(400).json({ message: "El ID de entidad es inválido", error: "El ID de entidad es inválido" });
  }

  try {
    const { take, skip } = parsePagination(req.query);
    const auditorias = await prisma.auditoria.findMany({
      where: { [entidadKey]: entidadId },
      take,
      skip,
      orderBy: { createdAt: "desc" },
      include: includeAuditoriaRelacion,
    });

    return res.status(200).json({ message: "Auditoría obtenida exitosamente", data: limpiarAuditorias(auditorias) });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener auditoria de la entidad",
      error: "Error al obtener auditoria de la entidad",
      details: error.message,
    });
  }
};

export { getAuditoriaGeneral, getAuditoriaPorUsuario, getAuditoriaPorEntidad };
