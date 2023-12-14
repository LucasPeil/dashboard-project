import axios from "axios";
const API_URL = "http://localhost:5101/api/atividades-educacao/";

const setNewAtividadeEducacao = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  const response = await axios.post(API_URL + "/", formData, config);
  return response.data;
};

const getAllAtividadesEducacao = async () => {
  const config = {};

  const response = await axios.get(API_URL, config);

  return response.data;
};
const getSingleAtividadeEducacao = async (id) => {
  const config = {};
  const response = await axios.get(API_URL + `/${id}`);
  return response.data;
};

const removeSingleAtividadeEducacao = async (id) => {
  const config = {};
  const response = await axios.delete(API_URL + `/${id}`);
  return response.data;
};

const educacaoService = {
  setNewAtividadeEducacao,
  getAllAtividadesEducacao,
  getSingleAtividadeEducacao,
  removeSingleAtividadeEducacao,
};

export default educacaoService;
