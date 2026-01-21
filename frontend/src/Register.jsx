import { useState } from "react";
import api from "./api.js"
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    await api.post("/register", { name, email, password });
    navigate("/");
  };

  return (
    <div className="container">
  <h2>Register</h2>
  <form onSubmit={registerUser}>
    <input placeholder="Name" onChange={e => setName(e.target.value)} />
    <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
    <button>Register</button>
    <a href="/">Back to Login</a>
  </form>
</div>
  );
}
