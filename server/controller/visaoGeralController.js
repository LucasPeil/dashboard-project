const AtividadesCasa = require("../models/atividadesCasaModel");
const AtividadesLazer = require("../models/atividadesLazerModel");
const AtividadesEducacao = require("../models/atividadesEducacaoModel");
const asyncHandler = require("express-async-handler");

const getTempoGasto = asyncHandler(async (req, res) => {
  const tempoCasa = await AtividadesCasa.distinct("tempoGasto", {});
  const tempoLazer = await AtividadesLazer.distinct("tempoGasto", {});
  const tempoEducacao = await AtividadesEducacao.distinct("tempoGasto", {});
  let tempoCasaSum = 0;
  let tempoLazerSum = 0;
  let tempoEducacaoSum = 0;
  if (tempoCasa.length > 0) {
    tempoCasaSum = tempoCasa.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }

  if (tempoLazer.length > 0) {
    tempoLazerSum = tempoLazer.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
  if (tempoEducacao.length > 0) {
    tempoEducacaoSum = tempoEducacao.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }

  res.status(200).json({ tempoCasaSum, tempoLazerSum, tempoEducacaoSum });
});
const getDinheiroGasto = asyncHandler(async (req, res) => {
  const dinheiroCasa = await AtividadesCasa.distinct("dinheiroGasto", {});
  const dinheiroLazer = await AtividadesLazer.distinct("dinheiroGasto", {});
  const dinheiroEducacao = await AtividadesEducacao.distinct(
    "dinheiroGasto",
    {}
  );
});

module.exports = { getTempoGasto, getDinheiroGasto };
