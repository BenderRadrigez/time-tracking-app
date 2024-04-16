import React from "react";
import style from "./style.module.css"
import o from "../../assets/digits/0.png";
import one from "../../assets/digits/1.png";
import two from "../../assets/digits/2.png";
import three from "../../assets/digits/3.png";
import four from "../../assets/digits/4.png";
import five from "../../assets/digits/5.png";
import six from "../../assets/digits/6.png";
import seven from "../../assets/digits/7.png";
import eight from "../../assets/digits/8.png";
import nine from "../../assets/digits/9.png";
import doubleDoth from "../../assets/digits/doubleDoth.png"

export default function NumbersInTimer({ number = 0 }) {
  switch (number) {
    case 1:
      return <img className={style.img} src={one} alt={`${number}`} />;
    case 2:
      return <img className={style.img} src={two} alt={`${number}`} />;
    case 3:
      return <img className={style.img} src={three} alt={`${number}`} />;
    case 4:
      return <img className={style.img} src={four} alt={`${number}`} />;
    case 5:
      return <img className={style.img} src={five} alt={`${number}`} />;
    case 6:
      return <img className={style.img} src={six} alt={`${number}`} />;
    case 7:
      return <img className={style.img} src={seven} alt={`${number}`} />;
    case 8:
      return <img className={style.img} src={eight} alt={`${number}`} />;
    case 9:
      return <img className={style.img} src={nine} alt={`${number}`} />;
    case 0:
      return <img className={style.img} src={o} alt={`${number}`} />;
    default:
      return <img className={style.img} src={doubleDoth} alt={`${number}`} />;
  }
}
