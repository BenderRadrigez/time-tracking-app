import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timer, setTimer] = useState(0);

  // Update time every second

  setTimeout(() => {
    setTime(new Date().toLocaleTimeString());
    setTimer(timer + 1);
  }, 1000);


  return (
    <div>
      <p>Current Time: {time}</p>
      <div>timer {timer}</div>
      <button onClick={() => {}}>Start</button>
    </div>
  );
}
