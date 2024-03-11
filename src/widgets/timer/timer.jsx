import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTimerStartStop } from "../../store/slices/timerToggleSlice";
import useSound from "use-sound";
import style from "./timer.module.css";
import signal from "../../assets/sound/signal.mp3";

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timer, setTimer] = useState(0);
  const { runTimer } = useSelector((state) => state.timerToggle);
  const aboutTicket = useSelector((state) => state.infoAboutTicket);
  const dispatch = useDispatch();
  const [play] = useSound(signal, { volume: 1 });

  // Update time every second
  setTimeout(() => {
    setTime(new Date().toLocaleTimeString());
    if (runTimer && aboutTicket.time === null) {
      setTimer(timer + 1);
    } else if (runTimer && Math.floor(timer) !== aboutTicket.time * 60) {
      setTimer(timer + 1);
    }

    if ((Math.floor(timer) === aboutTicket.time * 60) > 0) {
      play();
    }
  }, 1000);

  return (
    <div className={style.timer}>
      <p className={style.currentTime}>
        Current Time: <br />
        {time}
      </p>
      <h3>{aboutTicket.title}</h3>
      <p>{aboutTicket.time} minutes</p>
      <h2 className={style.timerValue}>
        h:m:s <br />
        {Math.floor(timer / 3600)}:{Math.floor(timer / 60)}:{timer % 60}
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
