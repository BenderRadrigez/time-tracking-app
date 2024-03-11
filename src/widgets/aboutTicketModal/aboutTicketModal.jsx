import React from "react";
import { useDispatch } from "react-redux";
import { removeTicket } from "../../store/slices/ticketsSlice";
import { clearInfoAboutTicket, getInfoAboutTicket } from "../../store/slices/startTicketSlice";
import { toggleTimerStartStop } from "../../store/slices/timerToggleSlice";

export default function AboutTicketModal({ ticketInfo, setIsHideAbout }) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{ticketInfo.title}</p>
      <p>
        time for task: {Math.floor(ticketInfo.time / 60)}:{ticketInfo.time % 60}
        :0
      </p>
      <button
        onClick={() => {
          dispatch(getInfoAboutTicket(ticketInfo));
          setIsHideAbout(true);
          toggleTimerStartStop();
        }}
      >
        start task
      </button>
      <button
        onClick={() => {
          dispatch(removeTicket(ticketInfo.id));
          clearInfoAboutTicket()
          setIsHideAbout(true);
        }}
      >
        delete task
      </button>
      <button
        onClick={() => {
          setIsHideAbout(true);
        }}
      >
        close
      </button>
    </div>
  );
}
