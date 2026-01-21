import { useState } from "react";
import api from "./api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await api.post("https://student-app-1-6z3s.onrender.com/login", { email, password });
    localStorage.setItem("token", res.data.token);
    navigate("https://student-app-1-6z3s.onrender.com/dashboard");
  };

  return (
    <div className="container">
  <h2>Login</h2>
  <form onSubmit={loginUser}>
    <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
    <button>Login</button>
    <a href="/register">Create Account</a>
  </form>
</div>

  );
}
