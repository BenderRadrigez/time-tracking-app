import React from "react";
import UserInfo from "../../widgets/UserInfo/userInfo";
import "./style.css";
import Timer from "../../widgets/timer/timer";
import Tickets from "../../widgets/tickets/tickets";
import Navigate from "../../widgets/navigate/navigate";
import { useSelector } from "react-redux";

export default function MainPage() {
  const { activity, task, profile } = useSelector((state) => state.toggleMenu);
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
      {profile && <div className="workPanel"></div>}
    </div>
  );
}
