import axios from "axios";

const api = axios.create({
  baseURL: "https://eastmanchesterapi.azurewebsites.net//Customer",
});

export default api;
