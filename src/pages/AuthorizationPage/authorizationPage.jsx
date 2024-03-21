import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/requests/setUserData";

export default function AuthorizationPage() {
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordValid, setUserPasswordValid] = useState("");
  const userLoginData = {
    login: "",
    password: "",
  };

  // не доделана, пока только сравнение паролей, добавить валидацию паролей
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
            placeholder="repeat Password"
            onChange={(e) => setUserPasswordValid(e.target.value)}
          />
        )}

        <button
          className="loginBtn"
          onClick={() => {
            if (!isLogin) {
              if (validPassword) {
                userLoginData.login = userName;
                userLoginData.password = userPassword;
                dispatch(addUser(userLoginData));
              }
            } else {
              // вход
            }
          }}
        >
          {!isLogin ? "Sign Up" : "Login"}
        </button>
      </div>

      <p>or</p>
      <button
        className="toggleBtn"
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
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
