const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./db");

const PORT = process.env.PORT || 5030;

connectDb();
app.use(cors());

app.use(bodyParser.json());

app.use("/api/atividades-casa", require("./routes/atividadesCasaRoutes"));
app.use("/api/visaoGeral", require("./routes/visaoGeralRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log("Server started on port " + PORT));
