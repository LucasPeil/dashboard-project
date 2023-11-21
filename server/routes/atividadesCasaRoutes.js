const express = require("express");
const router = express.Router();

const {
  getAllAtividadesCasa,
  getSingleAtividade,
  setNewAtividadeCasa,
  deleteAtividade,
} = require("../controller/atividadesCasaController");
router.route("/").post(setNewAtividadeCasa);
router.route("/").get(getAllAtividadesCasa);
router.route("/:id").get(getSingleAtividade).delete(deleteAtividade);

module.exports = router;
