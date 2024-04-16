import React, { useEffect, useState } from "react";
import style from "./userInfo.module.css";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../../shared/defaultButton";
import defaultUserIcon from "../../assets/images/defaultUserIcon.png";
import { storage } from "../../app/firebase";
import { getDownloadURL, ref } from "firebase/storage";

export default function UserInfo() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("user");
  const [userImgURL, setUserImgURL] = useState(null);

  useEffect(() => {
    // сделано через localStorage - быстрее, сразу есть все данные под рукой, легко можно переделать через store
    const user = JSON.parse(localStorage.getItem("userInfo"));
    // save userName data
    setUserName(`${user.userData.userName} ${user.userData.userLastname}`);
    //  save imgUrl data
    getDownloadURL(ref(storage, `images/${user.id}/icon.jpg`)).then((url) =>
      setUserImgURL(url)
    );
  }, []);

  return (
    <div className={style.userInfo}>
      <img
        src={userImgURL === null ? defaultUserIcon : userImgURL}
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
