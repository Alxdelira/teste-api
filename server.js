import app from "./src/app.js";
import * as dotenv from "dotenv";

dotenv.config();


const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Servidor Rodando em http://localhost:${port}`));