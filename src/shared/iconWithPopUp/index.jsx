import React, { useState } from "react";
import iconSvg from "../../assets/images/icons/information.svg";
import style from "./style.module.css";

export default function IconWithPopUp({ messageForPop }) {
  const [isPopup, setIsPopup] = useState(false);
  return (
    <div className={style.iconDiv}>
      <img
        src={iconSvg}
        alt="Info Icon"
        className={style.icon}
        onClick={() => setIsPopup(!isPopup)}
      />
      {isPopup && (
        <div className={style.windowInfo}>
          <p>{messageForPop}</p>
        </div>
      )}
    </div>
  );
}
