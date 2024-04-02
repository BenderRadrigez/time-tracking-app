import React, { useState } from "react";
import style from "./userInfo.module.css";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../../shared/defaultButton";
import defaultUserIcon from "../../assets/images/defaultUserIcon.png"

export default function UserInfo() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("John Doe");

  return (
    <div className={style.userInfo}>
      <img
        src={defaultUserIcon}
        alt="img"
        className={style.image}
      />
      <h2 className={style.name}>{userName}</h2>

      <DefaultButton
        castomStyle={style.logOut}
        text={"log out"}
        onClickFunc={() => {
          navigate("/");
          localStorage.clear();
        }}
      />
    </div>
  );
}
