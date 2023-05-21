import Usuario from "../models/Usuario.js";

export default class UsuarioController {
  static cadastrarUsuario = async (req, res) => {
    try {

      const usuario = new Usuario(req.body);

      if (usuario.nome.length < 3) {
        return res.status(400).json({ error: true, code: 400, message: "Nome deve ter mais de 3 caracteres" })
      }

      await usuario.save();
      return res.status(201).json({ message: "Usuario Cadastrado com Sucesso" })

    } catch (error) {
      return res.status(500).json({ error: true, code: 500, message: "Error Interno no Servidor" });
    }
  }
  static listarUsuarios = async (req, res) => {
    try {
      const nome = req.query.nome;
      const email = req.query.email;
      const page = req.query.page;
      const perPage = req.query.perPage;

      const option = {
        page: parseInt(page) || 1,
        limit: parseInt(perPage) > 10 ? 10 : parseInt(perPage) || 10,
      }

      if (nome) {
        const usuarios = await Usuario.paginate({ nome: new RegExp(nome, "i") }, option)
        return res.status(200).json(usuarios);
      }

      if (email) {
        const usuarios = await Usuario.paginate({ nome: new RegExp(email, "i") }, option)
        return res.status(200).json(usuarios);
      }
      if (nome && email) {
        const usuarios = await Usuario.paginate({ $and: [{ nome: new RegExp(nome, "i") }, { email: new RegExp(email, "i") }] }, option)
        return res.status(200).json(usuarios);
      }

      const usuarios = await Usuario.paginate({}, option);
      return res.status(200).json(usuarios);

    } catch (error) {
      return res.status(500).json({ error: true, code: 500, message: "Error Interno no Servidor" });
    }
  }
  static listarUsuariosId = async (req, res) => {
    const id = req.params.id;
  
    try {
      const usuario = await Usuario.findById(id);
  
      if (!usuario) {
        return res.status(404).json({ code: 404, message: "Usuario não encontrado!" });
      }
  
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json({ error: true, code: 500, message: "Error Interno no Servidor" });
    }
  }
  
  // static atualizarUsuarios = async (req, res) => {
  //   try{
  //     const id = req.params.id;

  //   }catch{

  //   }
  // }
}