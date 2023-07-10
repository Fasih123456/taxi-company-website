import axios from "axios";

const api = axios.create({
  baseURL: "https://emms-client-backend.azurewebsites.net",
});

export default api;
