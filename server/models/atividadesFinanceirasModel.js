const mongoose = require("mongoose");

const atividadesFinanceirasSchema = new mongoose.Schema({
  nomeAtividade: {
    type: String,
    required: true,
  },
  descricaoAtividade: {
    type: String,
    required: false,
  },
  custo: {
    type: Number,
    required: true,
  },
  nivelNecessidade: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "AtividadesFinanceiras",
  atividadesFinanceirasSchema
);
