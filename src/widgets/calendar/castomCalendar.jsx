import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import style from "./style.module.css";

export default function CastomCalendar() {
  const [calendarValue, setCalendarValue] = useState(new Date());
  return (
    <>
      <Calendar
        className={style.calendar}
        onChange={setCalendarValue}
        value={calendarValue}
      />
    </>
  );
}
