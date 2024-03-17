import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthorizationPage() {
  const navigate = useNavigate();
  const setUserData = useSelector((state) => state.setUserData)
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordValid, setUserPasswordValid] = useState("");
  const userData = { name: "", password: "" };

  function validPassword() {
    return userPassword === userPasswordValid;
  }


  return (
    <div className="auth-page">
      <h2 className="logo">{isLogin ? "Authorization" : "Registration"}</h2>

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
            placeholder="repid Password"
            onChange={(e) => setUserPasswordValid(e.target.value)}
          />
        )}

        <button
          className="loginBtn"
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

      {userPasswordValid.length > 0 && (
        <p
          style={{
            color: validPassword() ? "green" : "red",
          }}
        >
          {validPassword() ? "passwords success" : "passwords mismatch"}
        </p>
      )}
    </div>
  );
}
