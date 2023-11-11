const mongoose = require("mongoose");

const atividadesLazerSchema = new mongoose.Schema({
  nomeAtividade: {
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
});

module.exports = mongoose.model("AtividadesLazer", atividadesLazerSchema);
