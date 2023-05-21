import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

// Schema -> construtor para instanciar objetos no banco

const medicoSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true, index: true },
  cpf: { type: String, required: true, unique: true, trim: true, index: true, minLength: 14, maxLength: 14 },
  cargo: { type: String },
  crm: { type: number }
})

medicoSchema.plugin(mongoosePaginate);

const medicos = mongoose.model('medicos', medicoSchema);

export default medicos;