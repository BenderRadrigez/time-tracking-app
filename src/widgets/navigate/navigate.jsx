import React from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  openActivity,
  openProfile,
  openTask,
} from "../../store/slices/toggleMenuSlice";

export default function Navigate() {
  const dispatch = useDispatch();
  const { activity, task, profile } = useSelector((state) => state.toggleMenu);

  return (
    <div className={style.navigate}>
      <button
        onClick={() => dispatch(openActivity())}
        className={style.buttonNav + " " + (activity && style.isActiveBtn)}
      >
        ACTIVITY
      </button>
      <button
        onClick={() => dispatch(openTask())}
        className={style.buttonNav + " " + (task && style.isActiveBtn)}
      >
        TASK
      </button>
      <button
        onClick={() => dispatch(openProfile())}
        className={style.buttonNav + " " + (profile && style.isActiveBtn)}
      >
        PROFILE
      </button>
    </div>
  );
}
