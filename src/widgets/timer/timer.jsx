import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTimerStartStop } from "../../store/slices/timerToggleSlice";
import style from "./timer.module.css";

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timer, setTimer] = useState(0);
  const { runTimer } = useSelector((state) => state.timerToggle);
  const dispatch = useDispatch();

  // Update time every second
  setTimeout(() => {
    setTime(new Date().toLocaleTimeString());
    if (runTimer) setTimer(timer + 1);
  }, 1000);

  return (
    <div className={style.timer}>
      <p className={style.currentTime}>
        Current Time: <br />
        {time}
      </p>
      <h2 className={style.timerValue}>
        h:m:s <br/>{Math.floor(timer / 3600)}:{Math.floor(timer / 60)}:{timer % 60}
      </h2>
      <button
        className={style.startBtn}
        onClick={() => {
          dispatch(toggleTimerStartStop());
        }}
      >
        {runTimer ? "stop" : "start"}
      </button>
      <button
        className={style.clearBtn}
        onClick={() => {
          setTimer(0);
        }}
      >
        clear
      </button>
    </div>
  );
}
