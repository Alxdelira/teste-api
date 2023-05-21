import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

// Schema -> construtor para instanciar objetos no banco

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true, index: true },
  email: {
    type: String, required: true, unique: true, trim: true, index: true, lowercase: true, validate: {
      validator: (value) => {
        return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(value);
      },
      message: "Endereço de e-mail inválido"
    }
  },
  senha: { type: String, required: true },
  ativo: { type: Boolean, require: true, default: true }
})

usuarioSchema.plugin(mongoosePaginate);

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;