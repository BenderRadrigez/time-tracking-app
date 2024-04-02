import React, { useState } from "react";
import style from "./style.module.css";
import IconWithPopUp from "../iconWithPopUp";

export default function CustomInput({
  customStyle = "",
  type = "text",
  placeholder = "",
  onChange,
  value,
  isInfoIcon = false,
  infoText = "",
  isFile = false,
}) {
  // if will need to change the input text, like filename of download
  const [textInLabel, setTextInLable] = useState("Click to Download File");

  
  return (
    <form className={style.inptStyle + ` ${customStyle}`}>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={isFile ? style.inptFile : style.inpt}
      />
      {isInfoIcon && <IconWithPopUp messageForPop={infoText.slice(0, 73)} />}
      {isFile && (
        <label className={style.saveImg} htmlFor={style.inptFile}>
          {textInLabel}
        </label>
      )}
    </form>
  );
}
