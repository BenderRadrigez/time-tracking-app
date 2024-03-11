import React from "react";
import style from "./userInfo.module.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function UserInfo() {
  const navigate = useNavigate();
  return (
    <div className={style.userInfo}>
      <img
        src="https://via.placeholder.com/150x150"
        alt="img"
        className={style.image}
      />
      <h2 className={style.name}>John Doe</h2>
      <button
        className={style.logOut}
        onClick={() => navigate("./authorization")}
      >
        log out
      </button>
    </div>
  );
}
