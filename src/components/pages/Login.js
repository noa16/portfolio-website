import React, { useState, Fragment } from "react";
import axios from "../../axios/axios";
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin,setLogin] = useState("")
  const history = useHistory();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
    await axios.post("http://localhost:3000/api/auth",{
      email:username,
      password:password
    })
    
     await setLogin("")
     history.push('/inbox');
     
    }
    catch(e){
      await setLogin("Username or Password incorrect!")

    }
};
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "15rem",
            fontFamily: "Nunito, sans-serif",
            letterSpacing: "var(--spacing)",
            marginTop: "10rem",
            width: "10rem",
          }}
        >
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
          type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{color:"red",fontSize:"0.7rem" ,fontWeight:"7rem"}}>
           {isLogin}
          </div>
          
          <button
            style={{
              marginTop: "1rem",
              height: "20px",
              borderRadius: "3rem",
              fontFamily: "Armata, sans-serif",
              fontFamily: "Nunito, sans-serif",
              letterSpacing: "var(--spacing)",
              cursor: "pointer",
               outline: "0"
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
