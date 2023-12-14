const mongoose = require("mongoose");

const atividadesCasaSchema = new mongoose.Schema({
  nomeAtividade: {
    type: String,
    required: false,
  },
  categoria: {
    type: String,
    required: true,
  },
  tempoGasto: {
    type: Number,
    required: false,
  },
  dinheiroGasto: {
    type: Number,
    required: false,
  },
  descricaoAtividade: {
    type: String,
    required: false,
  },

  mesInsercao: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AtividadesCasa", atividadesCasaSchema);
