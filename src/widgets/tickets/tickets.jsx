import React, { useState } from "react";
import style from "./tickets.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTicket } from "../../store/slices/ticketsSlice";
import AboutTicketModal from "../aboutTicketModal/aboutTicketModal";

export default function Tickets() {
  const dispatch = useDispatch();
  const { ticketsList } = useSelector((state) => state.tickets);
  let isError = false;
  const [isHideModal, setIsHideModal] = useState(true);
  const [isHideAbout, setIsHideAbout] = useState(true);
  const [ticketData, setTicketData] = useState({});

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
              <button
                className={style.ticketButton}
                onClick={() => {
                  setIsHideAbout(false);
                  setTicketData(el);
                }}
              >
                {el.title}
              </button>
            </li>
          );
        })}
      </ul>

      {!isHideModal && (
        <div className={style.modalWindowCreateTicket}>
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
          <button
            onClick={() => {
              setIsHideModal(true);
            }}
          >
            close
          </button>
        </div>
      )}
      {!isHideAbout && (
        <AboutTicketModal
          ticketInfo={ticketData}
          setIsHideAbout={setIsHideAbout}
        />
      )}
    </div>
  );
}
