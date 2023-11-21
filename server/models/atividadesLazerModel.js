const mongoose = require("mongoose");

const atividadesLazerSchema = new mongoose.Schema({
  nomeAtividade: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  descricaoAtividade: {
    type: String,
    required: false,
  },
  tempoGasto: {
    type: String,
    required: true,
  },
  dinheiroGasto: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("AtividadesLazer", atividadesLazerSchema);
