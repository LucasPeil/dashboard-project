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
    throw new Error("Erro ao recuperar atividade");
  }
});

const setNewAtividadeCasa = asyncHandler(async (req, res) => {
  const { data } = req.body;

  let atividade;
  let message;

  if (data._id) {
    atividade = await AtividadesCasa.findById(data._id);
    atividade.$set(data);
    atividade = await atividade.save();
    message = "Aividade atualizada com sucesso.";
  } else {
    delete data._id;
    atividade = new AtividadesCasa(casa);
    atividade = await atividade.save();
    message = "Aividade registrada com sucesso.";
  }

  if (atividade) {
    res.status(201).json(atividade);
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
