const AtividadesCasa = require("../models/atividadesCasaModel");
const asyncHandler = require("express-async-handler");

const getAllAtividadesCasa = asyncHandler(async (req, res) => {
  const atividadesCasa = await AtividadesCasa.find({});

  if (atividadesCasa.length != 0) {
    res.status(200).json(atividadesCasa);
  } else {
    res.status(404);
    throw new Error("Erro ao recuperar atividades");
  }
});

const getSingleAtividade = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const atividade = await AtividadesCasa.findById(id);

  if (atividade._id) {
    res.status(200).json(atividade);
  } else {
    res.status(404);
    throw new Error("Erro ao inserir dados");
  }
});

const setNewAtividadeCasa = asyncHandler(async (req, res) => {
  console.log("Dados recebidos no servidor:", req.body);
  const data = JSON.parse(req.body.data);

  let atividadeCasa;
  let message;

  if (data._id) {
    atividadeCasa = await AtividadesCasa.findById(data._id);
    atividadeCasa.$set(data);
    atividadeCasa = await atividadeCasa.save();
    message = "Aividade atualizada com sucesso.";
  } else {
    delete data._id;
    atividadeCasa = new AtividadesCasa(data);
    atividadeCasa = await atividadeCasa.save();
    message = "Aividade registrada com sucesso.";
  }

  if (atividadeCasa) {
    res.status(201).json(atividadeCasa);
  } else {
    res.status(400);
    throw new Error("Erro ao inserir dados");
  }
});

const deleteAtividade = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const atividade = await AtividadesCasa.findByIdAndDelete(id);

  if (atividade) {
    res.status(200).json(atividade);
  } else {
    res.status(400);
    throw new Error("Erro ao tentar excluir dados");
  }
});

module.exports = {
  getAllAtividadesCasa,
  getSingleAtividade,
  setNewAtividadeCasa,
  deleteAtividade,
};
