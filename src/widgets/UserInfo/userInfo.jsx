import React from "react";
import style from "./userInfo.module.css";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../../shared/defaultButton"

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
      
      <DefaultButton castomStyle={style.logOut} text={"log out"} onClickFunc={() => {
          navigate("/");
          localStorage.clear();
        }}/>
    </div>
  );
}
