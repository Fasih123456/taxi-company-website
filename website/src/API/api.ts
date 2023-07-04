import axios from "axios";

const api = axios.create({
  baseURL: "/api/Customer",
});

export default api;
