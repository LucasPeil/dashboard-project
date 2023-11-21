const express = require("express");
const router = express.Router();

const { getTempoGasto } = require("../controller/visaoGeralController");

router.route("/tempoGasto").get(getTempoGasto);

module.exports = router;
