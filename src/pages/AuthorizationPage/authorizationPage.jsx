import React, { useState } from "react";
import "./style.css";
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
    </div>
  );
}
