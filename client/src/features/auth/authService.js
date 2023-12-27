import axios from "axios";

const API_URL = "http://localhost:5101/api/users";

const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const resetPassword = async (userData, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const response = await axios.post(
    API_URL + "/resetPassword",
    userData,
    config
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify("user", response.data));
  }
  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  resetPassword,
  logout,
};

export default authService;
