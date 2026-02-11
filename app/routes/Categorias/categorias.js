import express from 'express';
import {createCategoria,updateCategoria,getCategorias} from '../../controllers/Categorias/categorias.js';
import { authMiddleware } from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/crear", authMiddleware, createCategoria); 

router.get("/ver", authMiddleware, getCategorias);

router.put("/actualizar/:id", authMiddleware, updateCategoria);

export default router;