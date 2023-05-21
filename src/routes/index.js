import usuarios from "./usuariosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).json({message: "Bem vindo a Minha Api"})
  })
  app.use(
    usuarios,
  )
}

export default routes;

