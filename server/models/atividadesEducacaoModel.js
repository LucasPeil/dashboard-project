const mongoose = require("mongoose");

const atividadesEducacaoSchema = new mongoose.Schema({
  nomeAtividade: {
    type: String,
    required: true,
  },
  tempoGasto: {
    type: Number,
    required: true,
  },
  descricaoAtividade: {
    type: String,
    required: false,
  },
  nivelImportancia: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AtividadesEducacao", atividadesEducacaoSchema);
