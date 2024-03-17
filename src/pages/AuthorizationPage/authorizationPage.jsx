import React, { useState } from "react";
import "./style.css";

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
    </div>
  );
}
