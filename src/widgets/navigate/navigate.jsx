import React from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  openActivity,
  openProfile,
  openTask,
} from "../../store/slices/toggleMenuSlice";
import DefaultButton from "../../shared/defaultButton";

export default function Navigate() {
  const dispatch = useDispatch();
  const { activity, task, profile } = useSelector((state) => state.toggleMenu);

  return (
    <div className={style.navigate}>
      <DefaultButton
        text={"ACTIVITY"}
        onClickFunc={() => dispatch(openActivity())}
        castomStyle={style.buttonNav + " " + (activity && style.isActiveBtn)}
      />
      <DefaultButton
        text={"TASK"}
        onClickFunc={() => dispatch(openTask())}
        castomStyle={style.buttonNav + " " + (task && style.isActiveBtn)}
      />
      <DefaultButton
        text={"PROFILE"}
        onClickFunc={() => dispatch(openProfile())}
        castomStyle={style.buttonNav + " " + (profile && style.isActiveBtn)}
      />
    </div>
  );
}
