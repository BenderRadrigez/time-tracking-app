import React from "react";
import UserInfo from "../../widgets/UserInfo/userInfo";
import "./style.css";
import CastomCalendar from "../../widgets/calendar/castomCalendar";
import Timer from "../../widgets/timer/timer";
import Tickets from "../../widgets/tickets/tickets";

export default function MainPage() {
  return (
    <div className="mainPage">
      <div  className="head">
        <UserInfo />
        <CastomCalendar />
      </div>
      <div className="workPanel">
        <Timer/>
        <Tickets/>
      </div>
    </div>
  );
}
