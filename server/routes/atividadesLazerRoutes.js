const express = require("express");
const {
  getAllAtividadesLazer,
  setNewAtividadeLazer,
  getSingleAtividadeLazer,
  deleteAtividadeLazer,
} = require("../controller/atividadesLazerController");
const router = express.Router();

router.route("/").get(getAllAtividadesLazer).post(setNewAtividadeLazer);
router.route("/:id").get(getSingleAtividadeLazer).delete(deleteAtividadeLazer);

module.exports = router;
