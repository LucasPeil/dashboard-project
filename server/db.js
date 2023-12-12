const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (e) {
    console.log("Erro ao conectar ao banco de dados " + e);
  }
};

module.exports = connectDb;
