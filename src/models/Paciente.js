import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const pacienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  cpf: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    index: true,
    minLength: 14,
    maxLength: 14
  },
  idade: {
    type: number,
  },
})

pacienteSchema.plugin(mongoosePaginate);

const pacientes = mongoose.model('pacientes', pacienteSchema);

export default pacientes;