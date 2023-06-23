import React, { useState } from 'react';
import "./Login.scss"
import { useNavigate } from "react-router-dom";
//import newRequest from "../../utils/newRequest";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (err){
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit = {handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input 
          name="username"
          type="text"
          placeholder='Himasha Nethmini' 
          onChange={(e) => setUsername(e.target.value)}
          />
          
      </form>
    </div>
  )
}




export default Login
