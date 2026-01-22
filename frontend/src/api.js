import axios from "axios";

const api = axios.create({
  baseURL: "https://student-app-1-6z3s.onrender.com/api/auth",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

