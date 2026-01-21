import axios from "axios";

const api = axios.create({
  baseURL: "https://student-app-1-6z3s.onrender.com/api/auth"
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

export default api;
