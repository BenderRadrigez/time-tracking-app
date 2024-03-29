import React, { useEffect, useState } from "react";
import UserInfo from "../../widgets/UserInfo/userInfo";
import "./style.css";
import Timer from "../../widgets/timer/timer";
import Tickets from "../../widgets/tickets/tickets";
import Navigate from "../../widgets/navigate/navigate";
import { useSelector } from "react-redux";
import CastomCalendar from "../../widgets/calendar/castomCalendar";
import DefaultButton from "../../shared/defaultButton"

export default function MainPage() {
  const { activity, task, profile } = useSelector((state) => state.toggleMenu);
  const [img, setImg] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    setImgURL(fileReader.result);
  };

  // useEffect(()=>{
  //   console.log(img);
  // },[img]);

  return (
    <div className="mainPage">
      <UserInfo />
      <Navigate />

      {activity && (
        <div className="workPanel">
          <Timer />
        </div>
      )}
      {task && (
        <div className="workPanel">
          <Tickets />
        </div>
      )}
      {profile && (
        <div className="workPanel">
          <CastomCalendar />
          <form className="file-uploader">
            <input
              type="file"
              onChange={(e) => {
                e.preventDefault();
                const file = e.target.files[0];
                setImg(file);
                fileReader.readAsDataURL(file);
              }}
              className="save-imgInpt"
            />
            <label className="save-img" htmlFor="save-imgInpt">
              DOWNLOAD FILE
            </label>
          </form>
          <DefaultButton text={"save"} onClickFunc={()=> console.log("hello")}/>
          {/* <img src={imgURL}  alt=""/> */}
        </div>
      )}
    </div>
  );
}
