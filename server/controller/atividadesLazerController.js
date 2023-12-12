const AtividadesLazer = require("../models/atividadesLazerModel");

const asyncHandler = require("express-async-handler");

const getAllAtividadesLazer = asyncHandler(async (req, res) => {
  const atividadesLazer = await AtividadesLazer.find({});

  if (atividadesLazer) {
    res.status(200).json(atividadesLazer);
  } else {
    res.status(404);
    throw new Error("Erro ao recuperar atividades");
  }
});

const getSingleAtividadeLazer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const atividade = await AtividadesLazer.findById(id);

  if (atividade._id) {
    res.status(200).json(atividade);
  } else {
    res.status(404);
    throw new Error("Erro ao inserir dados");
  }
});

const setNewAtividadeLazer = asyncHandler(async (req, res) => {
  const data = JSON.parse(req.body.data);
  let atividadeLazer;
  let message;

  if (data._id) {
    atividadeLazer = await AtividadesLazer.findById(data._id);
    atividadeLazer.$set(data);
    atividadeLazer = await atividadeLazer.save();
    message = "Aividade atualizada com sucesso.";
  } else {
    delete data._id;

    atividadeLazer = new AtividadesLazer(data);
    atividadeLazer = await atividadeLazer.save();
    message = "Aividade registrada com sucesso.";
  }

  if (atividadeLazer) {
    res.status(201).json(atividadeLazer);
  } else {
    res.status(400);
    throw new Error("Erro ao inserir dados");
  }
});

const deleteAtividadeLazer = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const atividade = await AtividadesLazer.findByIdAndDelete(id);

  if (atividade) {
    res.status(200).json(atividade);
  } else {
    res.status(400);
    throw new Error("Erro ao tentar excluir dados");
  }
});

module.exports = {
  getAllAtividadesLazer,
  getSingleAtividadeLazer,
  setNewAtividadeLazer,
  deleteAtividadeLazer,
};
