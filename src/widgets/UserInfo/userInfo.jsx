import React from "react";
import style from "./userInfo.module.css";

export default function UserInfo() {
  return (
    <div className={style.userInfo}>
      <img
        src="https://via.placeholder.com/150x150"
        alt="img"
        className={style.image}
      />
        <h2  className={style.name}>John Doe</h2>
      <button className={style.logOut}>log out</button>
    </div>
  );
}
