import axios from "axios";

const API_URL = "/api/atividades-geral";

const getTempoTotal = async () => {
  const config = {};

  const response = await axios.get(API_URL, config);
  return response.data;
};
const visaoGeralService = { getTempoTotal };
export default visaoGeralService;
