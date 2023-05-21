import express from "express"
import cors from "cors"
import db from "./config/dbConfig.js";
import routes from "./routes/index.js";

function connectDatabase() {
  db.on("error", (error) => console.log(error))
  db.once("open", () => console.log("Conexão Estabelecida com o Banco"))
}

connectDatabase(); // Rodar a Função

const app = express(); // Recebe tudo que vem do Express

// Configurar o cors
app.use(cors())

// Configuração para aceitar o modelo JSON

app.use(express.json());

// Rotas para API
routes(app);
export default app;

