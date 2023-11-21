const mongoose = require("mongoose");

const atividadesCasaSchema = new mongoose.Schema({
  nomeAtividade: {
    type: String,
    required: true,
  },
  tempoGasto: {
    type: Number,
    required: true,
  },
  dinheiroGasto: {
    type: Number,
    required: false,
  },
  descricaoAtividade: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("AtividadesCasa", atividadesCasaSchema);
