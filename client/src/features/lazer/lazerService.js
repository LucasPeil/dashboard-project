import axios from "axios";
const API_URL = "http://localhost:5100/api/atividades-lazer/";

const setNewAtividadeLazer = async (data) => {
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

const getAllAtividadesLazer = async () => {
  const config = {};

  const response = await axios.get(API_URL, config);

  return response.data;
};
const getSingleAtividadeLazer = async (id) => {
  const config = {};
  const response = await axios.get(API_URL + `/${id}`);
  return response.data;
};

const removeSingleAtividadeLazer = async (id) => {
  const config = {};
  const response = await axios.delete(API_URL + `/${id}`);
  return response.data;
};

const lazerService = {
  setNewAtividadeLazer,
  getAllAtividadesLazer,
  getSingleAtividadeLazer,
  removeSingleAtividadeLazer,
};

export default lazerService;
