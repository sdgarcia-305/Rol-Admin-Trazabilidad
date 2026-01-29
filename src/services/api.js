import axios from "axios"; 

const api = axios.create({
  baseURL: "https://pavelbacktrazabilidad.qzz.io/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
