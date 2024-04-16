import React, { useState } from "react";
import "./style.css";
<<<<<<< HEAD

export default function AuthorizationPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const userData = { name: "", password: "" };

  return (
    <div className="auth-page">
      <h2>{isLogin ? "Authorization" : "Registration"}</h2>

      <div className="auth">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        {!isLogin && (
          <input
            type="password"
            name="password"
            placeholder="return Password"
          />
        )}

        <button className="loginBtn"
          onClick={() => {
            userData.name = userName;
            userData.password = userPassword;
          }}
        >
          {!isLogin ? "Sign Up" : "Login"}
        </button>
      </div>

      <p>or</p>
      <button className="toggleBtn" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Sign Up" : "Login"}
      </button>
=======
import Auth from "../../widgets/auth/auth";
import Register from "../../widgets/register/register";

export default function AuthorizationPage() {

  const [isLogin, setIsLogin] = useState(true);
 
  return (
    <div className="auth-page">
      <h2 className="logo">{isLogin ? "Authorization" : "Registration"}</h2>

      {isLogin ? <Auth/> : <Register/>}

      <p>or</p>
      <button
        className="toggleBtn"
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Sign Up" : "Login"}
      </button>

>>>>>>> add-db-firebase
    </div>
  );
}
