import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../store/slices/requests/setUserData";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div className="auth">
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="repeat Password"
        onChange={(e) => setUserPasswordValid(e.target.value)}
      />
      <button
        className="loginBtn"
        onClick={() => {
          if (validPassword) {
            userLoginData.login = userName;
            userLoginData.password = userPassword;
            dispatch(addUser(userLoginData));
            navigate("/info");
          }
        }}
      >
        Sign Up
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
