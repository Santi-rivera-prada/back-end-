import express from "express";
import musicaController from "../controller/musica.controller.js";

const router = express.Router();

// Rutas = Endpoints
router.get('/musica/:id', musicaController.getMusicaById);
router.post('/musica', musicaController.createMusica);
router.put('/musica/:id', musicaController.updateMusica);
router.delete('/musica/:id', musicaController.deleteMusica);

export default router;