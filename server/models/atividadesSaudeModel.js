const mongoose = require("mongoose");

const atividadesSaudeSchema = new mongoose.Schema({
  nomeAtividade: {
    type: String,
    required: true,
  },
  descricaoAtividade: {
    type: String,
    required: false,
  },
  tempoGasto: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("AtividadesSaude", atividadesSaudeSchema);
