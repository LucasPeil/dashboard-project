import axios from "axios";

const API_URL = "http://localhost:5100/api/atividades-casa";

const setNewAtividadeCasa = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const formData = new FormData();
  formData.append("data", data); // Adiciona seus dados ao FormData

  const response = await axios.post(
    API_URL + "/newAtividade",
    { data: JSON.stringify(data) },
    config
  );

  return response.data;
};

const getAllAtividadesCasa = async () => {
  const config = {};

  const response = await axios.get(API_URL, config);
  return response.data;
};
const getSingleAtividade = async (id) => {
  const config = {};
  const response = await axios.get(API_URL + `/${id}`);
  return response.data;
};

const removeSingleAtividade = async (id) => {
  const config = {};
  const response = await axios.delete(API_URL + `/${id}`);
  return response.data;
};
const casaService = {
  setNewAtividadeCasa,
  getAllAtividadesCasa,
  getSingleAtividade,
  removeSingleAtividade,
};

export default casaService;
