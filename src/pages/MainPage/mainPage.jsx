import React from "react";
import UserInfo from "../../widgets/UserInfo/userInfo";
import "./style.css";
import Timer from "../../widgets/timer/timer";
import Tickets from "../../widgets/tickets/tickets";
import Navigate from "../../widgets/navigate/navigate";
import { useSelector } from "react-redux";
import CastomCalendar from "../../widgets/calendar/castomCalendar";

export default function MainPage() {
  const { activity, task, profile } = useSelector((state) => state.toggleMenu);

  return (
    <div className="mainPage">
      <UserInfo />
      <Navigate />

      <div className="workPanel">
        {activity && <Timer />}
        {task && <Tickets />}
        {profile && <CastomCalendar />}
      </div>
    </div>
  );
}