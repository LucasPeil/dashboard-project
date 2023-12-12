const express = require("express");
const {
  getAllAtividadesEducacao,
  setNewAtividadeEducacao,
  getSingleAtividadeEducacao,
  deleteAtividadeEducacao,
} = require("../controller/atividadesEducacaoController");
const router = express.Router();

router.route("/").get(getAllAtividadesEducacao).post(setNewAtividadeEducacao);
router
  .route("/:id")
  .get(getSingleAtividadeEducacao)
  .delete(deleteAtividadeEducacao);

module.exports = router;
