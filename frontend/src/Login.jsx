import { useState } from "react";
import api from "./api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await api.post("/login", { email, password });
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div className="container">
  <h2>Login</h2>
  <form onSubmit={loginUser}>
    <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
    <button>Login</button>
    <p>
          New user? <Link to="/register">Create Account</Link>
        </p>
  </form>
</div>

  );
}
