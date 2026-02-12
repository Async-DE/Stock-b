import express from "express";
import { getFileStream } from "../../bucket_service/bucket.js";

const router = express.Router();

router.get("/:carpeta/:archivo", async (req, res) => {
  const { carpeta, archivo } = req.params;
  const key = `${carpeta}/${archivo}`;

  try {
    const stream = await getFileStream(key);
    stream.pipe(res);
  } catch (error) {
    console.error("Error sirviendo imagen:", error);
    res.status(404).send("Imagen no encontrada");
  }
});

export default router;