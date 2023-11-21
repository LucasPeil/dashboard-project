import axios from "axios";

const API_URL = "/api/atividades-casa";

const setNewAtividadeCasa = async (data, token) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  const response = await axios.post(API_URL + "/", formData, config);

  return response.data;
};

const casaService = {
  setNewAtividadeCasa,
};

export default casaService;
