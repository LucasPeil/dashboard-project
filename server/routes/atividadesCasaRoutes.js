const express = require("express");
const router = express.Router();

const {
  getAllAtividadesCasa,
  getSingleAtividade,
  setNewAtividadeCasa,
  deleteAtividade,
} = require("../controller/atividadesCasaController");

router.route("/").get(getAllAtividadesCasa).post(setNewAtividadeCasa);
router.route("/:id").get(getSingleAtividade).delete(deleteAtividade);
