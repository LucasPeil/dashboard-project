const express = require("express");
const router = express.Router();

const {
  getAllAtividadesCasa,
  getSingleAtividade,
  setNewAtividadeCasa,
  deleteAtividade,
  getComprasQty,
  getLimpezaQty,
  getRefeicoesQty,
} = require("../controller/atividadesCasaController");
const paginationHandler = require("../middlewares/paginationMiddleware");
const AtividadesCasa = require("../models/atividadesCasaModel");
function filter() {
  return (req) => {
    const arr = [
      "nomeAtividade",
      "categoria",
      "descricaoAtividade",
      "mesInsercao",
    ];

    const and = [];

    if (req.query.filter) {
      and.push({
        $or: arr.map((key) => ({
          [key]: { $regex: req.query.filter, $options: "i" },
        })),
      });
    }

    if (req.query.categorySelected) {
      and.push({
        categoria: { $regex: req.query.categorySelected, $options: "i" },
      });
    }

    return and.length > 0 ? { $and: and } : {};
  };
}

router.route("/newAtividade").post(setNewAtividadeCasa);
router
  .route("/")
  .get(paginationHandler(AtividadesCasa, filter()), getAllAtividadesCasa);
router.route("/quantidadeCompras").get(getComprasQty);
router.route("/quantidadeLimpeza").get(getLimpezaQty);
router.route("/quantidadeRefeicoes").get(getRefeicoesQty);
router.route("/:id").get(getSingleAtividade).delete(deleteAtividade);

module.exports = router;
