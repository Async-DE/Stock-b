import prisma from "../../../prisma/prismaClient.js";
import { check, validationResult } from "express-validator";

const createVenta = async (req, res) => {
  const {
    varianteId,
    cantidad,
    total_venta,
    nombre_cliente,
    contacto_cliente,
    tipo_venta,
    costos_extras,
  } = req.body;

  // Ejecutar validaciones await para que validationResult funcione correctamente
  await check("varianteId")
    .notEmpty()
    .isInt()
    .withMessage("varianteId debe ser un entero")
    .run(req);
  await check("cantidad")
    .notEmpty()
    .isInt({ gt: 0 })
    .withMessage("cantidad debe ser un entero")
    .run(req);
  await check("total_venta")
    .notEmpty()
    .isFloat({ gt: 0 })
    .withMessage("total_venta debe ser un número decimal")
    .run(req);
  await check("nombre_cliente")
    .notEmpty()
    .isString()
    .withMessage("nombre_cliente debe ser una cadena de texto")
    .run(req);
  await check("contacto_cliente")
    .notEmpty()
    .isString()
    .withMessage("contacto_cliente debe ser una cadena de texto")
    .run(req);
  await check("tipo_venta")
    .notEmpty()
    .isIn(["publico", "contratista"])
    .withMessage("tipo_venta debe ser 'publico' o 'contratista'")
    .run(req);
  await check("costos_extras")
    .optional()
    .isArray()
    .withMessage("costos_extras debe ser un array")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const varianteIdInt = parseInt(varianteId, 10);
    const cantidadInt = parseInt(cantidad, 10);
    const totalVentaFloat = parseFloat(total_venta);

    // Obtener la variante actual
    const variante = await prisma.variantes.findUnique({
      where: { id: varianteIdInt },
    });

    if (!variante) {
      return res.status(404).json({ message: "Variante no encontrada" });
    }

    // Validar que hay cantidad suficiente
    if (variante.cantidad < cantidadInt) {
      return res
        .status(400)
        .json({ message: "Cantidad insuficiente en stock" });
    }

    // actualizamos las ganancias de la subcategoría
    const subcategoria = await prisma.subcategorias.findUnique({
      where: { id: variante.subcategoriaId },
    });

    await prisma.$transaction(async (tx) => {
      const subcategoriaActualizada = await tx.subcategorias.update({
        where: { id: variante.subcategoriaId },
        data: {
          ganancias_ventas: subcategoria.ganancias_ventas + totalVentaFloat,
        },
      });
      return {
        ganancias_ventas: subcategoriaActualizada.ganancias_ventas,
      };
    });

    const { precio_publico, precio_contratista, costo_compra, producto_id } =
      variante;

    // Determinar precio de venta según tipo
    const precioVenta =
      tipo_venta === "publico" ? precio_publico : precio_contratista;

    const gananciaUnitaria = precioVenta - costo_compra;
    const gananciaTotalVenta = gananciaUnitaria * cantidadInt;

    // Calcular costos extras totales si existen
    let totalCostosExtras = 0;
    const costosExtrasValidos = [];

    // Validar y procesar costos extras
    if (costos_extras && Array.isArray(costos_extras)) {
      for (const costo of costos_extras) {
        if (costo && costo.motivo && costo.costo !== undefined) {
          const costoFloat = parseFloat(costo.costo);
          if (Number.isNaN(costoFloat)) {
            continue;
          }
          totalCostosExtras += costoFloat;
          costosExtrasValidos.push({
            motivo: costo.motivo,
            costo: costoFloat,
          });
        }
      }
    }
    //
    // Ganancia neta después de costos extras
    // const gananciaNeta = gananciaTotalVenta - totalCostosExtras;

    const nuevaVenta = await prisma.$transaction(async (tx) => {
      const venta = await tx.ventas.create({
        data: {
          variante_id: varianteIdInt,
          cantidad: cantidadInt,
          total_venta: totalVentaFloat,
          nombre_cliente,
          contacto_cliente,
          precio_publico,
          precio_contratista,
          costo_compra,
        },
      });

      // Actualizar la cantidad de la variante
      await tx.variantes.update({
        where: { id: varianteIdInt },
        data: {
          cantidad: variante.cantidad - cantidadInt,
          // Actualizar ganancias según tipo de venta
          ...(tipo_venta === "publico" && {
            ganacia_publico: variante.ganacia_publico + gananciaTotalVenta,
          }),
          ...(tipo_venta === "contratista" && {
            ganacia_contratista:
              variante.ganacia_contratista + gananciaTotalVenta,
          }),
          // Actualizar ganancias totales del stock
          ganancias_stock: variante.ganancias_stock + gananciaTotalVenta,
        },
      });

      // Crear registros de costos extras si existen
      if (costosExtrasValidos.length > 0) {
        await tx.costosExtras.createMany({
          data: costosExtrasValidos.map((costo) => ({
            venta_id: venta.id,
            motivo: costo.motivo,
            costo: costo.costo,
          })),
        });
      }

      // Registrar en auditoría
      await tx.auditoria.create({
        data: {
          usuario_id: req.user.id,
          accion: "VENTA",
          varianteId: varianteIdInt,
          ventaId: venta.id,
          productoId: producto_id,
        },
      });

      return venta;
    });

    res.status(201).json({
      ...nuevaVenta,
      ganancia_total_venta: gananciaTotalVenta,
      ganancia_neta: gananciaNeta,
      costos_extras_aplicados: costosExtrasValidos,
    });
  } catch (error) {
    console.error("Error al crear venta:", error);
    res
      .status(500)
      .json({ error: "Error al crear la venta", details: error.message });
  }
};

const getVentasByDateRange = async (req, res) => {
  const { startDate, endDate } = req.body;
  try {
    const ventas = await prisma.ventas.findMany({
      where: {
        fecha_venta: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      include: {
        costosExtras: true,
      },
    });
    res.status(200).json(ventas);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener las ventas", details: error.message });
  }
};

const searchVentas = async (req, res) => {
  const { search } = req.body;
  try {
    const ventas = await prisma.ventas.findMany({
      where: {
        OR: [
          { nombre_cliente: { contains: search, mode: "insensitive" } },
          { contacto_cliente: { contains: search, mode: "insensitive" } },
        ],
      },
      include: {
        costosExtras: true,
      },
    });
    res.status(200).json(ventas);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar las ventas" });
  }
};

export { createVenta, getVentasByDateRange, searchVentas };
