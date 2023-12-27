const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const dotenv = require("dotenv").config();

const saltRounds = 10;

const createNewPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
};

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const filter = {};

  const userExists = await User.findOne({ username: username, email: email });
  if (userExists) {
    throw new Error("Usuário já existe");
  }
  const hashedPassword = await createNewPassword(password);
  const user = await User.create({
    username: username,
    email: email,
    password: hashedPassword,
  });
  if (user) {
    console.log(user);
    console.log("usuário criado com sucesso!");
  } else {
    throw new Error("Dados inválidos");
  }
});

const login = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ username: username, email: email }).lean();
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user._id,
      username: username.username,
      token: generateToken(user._id),
      resetPassword: user.resetPassword,
    });
  } else {
    res.status(404);
    throw new Error("Usuário ou senha inválidos");
  }
});

const generateToken = (id) => {
  return jwt.sing({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const resetPassword = asyncHandler(async (req, res) => {
  const { newPassword } = req.body;

  const hashedPassword = await createNewPassword(newPassword);
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { password: hashedPassword, resetPassword: false },
    { new: true }
  ).lean();

  if (user) {
    res.status(201).json({ ...user, token: generateToken(user._id) });
  } else {
    res.status(400);
    throw new Error("Dados inválidos");
  }
});

const verify = asyncHandler(async (req, res) => {
  let token;
  try {
    token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    res.status(200).json(req.user);
  } catch (error) {
    res.status(401);
    throw new Error("Não autorizado");
  }
});

const getById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const user = await User.find({ _id: id }, "email username _id");
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400);
    throw new Error("Dados inválidos");
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const { newPassword, resetPassword, userData } = req.body;

  if (resetPassword) {
    userData.password = await createNewPassword(newPassword);
    userData.resetPassword = false;
  }
  const { password, ...userDataUpdated } = findByIdAndUpdate(
    userData._id,
    userData,
    { new: true }
  );

  if (userDataUpdated) {
    res.status(200).json(userDataUpdated);
  } else {
    res.status(400);
    throw new Error("Dados inválidos");
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findOneAndDelete({ _id: id });
  if (user) {
    res.status(200).json({ id: user._id });
  } else {
    res.status(400);
    throw new Error("Usuário não encontrado");
  }
});

module.exports = {
  getById,
  createUser,
  updateUser,
  deleteUser,
  verify,
  login,
  resetPassword,
};
