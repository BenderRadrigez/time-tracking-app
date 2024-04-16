import React from "react";
import style from "./style.module.css";

export default function DefaultButton({text, onClickFunc, castomStyle = ""}) {
  return (
    <button className={style.button + " " + castomStyle} onClick={onClickFunc}>
      {text}
    </button>
  );
}
