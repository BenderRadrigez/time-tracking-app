import React, { useState } from "react";
import style from "./tickets.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTicket } from "../../store/slices/ticketsSlice";

export default function Tickets() {
  const dispatch = useDispatch();
  const { ticketsList } = useSelector((state) => state.tickets);
  let isError = false;
  const [isHideModal, setIsHideModal] = useState(true);

  const [titleValue, setTitleValue] = useState("");
  const [timeValue, setTimeValue] = useState("");

  function saveData() {
    const userData = {
      id: Math.floor(Math.random() * 1000),
      title: titleValue,
      time: timeValue,
    };
    setTitleValue("");
    setTimeValue(0);
    dispatch(addTicket(userData));
    setIsHideModal(true);
  }

  return (
    <div className={style.ticketsStyle}>
      <button
        className={style.addTicket}
        onClick={() => {
          setIsHideModal(false);
        }}
      >
        Add ticket
      </button>
      <ul>
        {ticketsList.map((el) => {
          return (
            <li key={el.id}>
              <button className={style.ticketButton}>{el.title}</button>
            </li>
          );
        })}
      </ul>

      <div
        className={
          style.modalWindowCreateTicket + " " + (isHideModal && style.hide)
        }
      >
        <input
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          value={timeValue}
          onChange={(e) => setTimeValue(e.target.value)}
          type="number"
          placeholder="time in minutes"
        />
        <button
          onClick={() => {
            isError = titleValue ? false : true;
            if (!isError) saveData();
          }}
        >
          add
        </button>
      </div>
      {isError && <p>title is can not clear</p>}
    </div>
  );
}
