import express from 'express';
import {createCategoria,updateCategoria} from '../../controllers/Categorias/categorias.js';

const router = express.Router();

router.post("/crear", createCategoria); 

router.put("/actualizar/:id", updateCategoria);

export default router;