const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 5030;
app.use(cors());

app.use(bodyParser.json());

app.use("/api/atividadesCasa", require("./routes/atividadesCasaRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log("Server started on port " + PORT));
