import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router
  .get("/usuarios", UsuarioController.listarUsuarios)
  .post("/usuarios", UsuarioController.cadastrarUsuario)
  .get("/usuarios/:id", UsuarioController.listarUsuariosId)

export default router;