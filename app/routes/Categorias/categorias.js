import express from 'express';
import {createCategoria,updateCategoria,getCategorias} from '../../controllers/Categorias/categorias.js';

const router = express.Router();

router.post("/crear", createCategoria); 

router.get("/ver", getCategorias);

router.put("/actualizar/:id", updateCategoria);

export default router;