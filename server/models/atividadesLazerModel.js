const mongoose = require("mongoose");

const atividadesLazerSchema = new mongoose.Schema({
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
  dataInsercao: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("AtividadesLazer", atividadesLazerSchema);
