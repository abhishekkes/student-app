import { useEffect, useState } from "react";
import api from "./api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/dashboard").then(res => setMsg(res.data.message));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard">
  <h2>Dashboard</h2>
  <p>{msg}</p>
  <button onClick={logout}>Logout</button>
</div>
  );
}
