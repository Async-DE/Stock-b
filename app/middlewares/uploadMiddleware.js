import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024, files: 5 }, // Límite de 5MB por archivo y máximo 5 archivos
});

export default upload;
