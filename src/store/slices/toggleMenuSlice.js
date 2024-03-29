import { createSlice } from "@reduxjs/toolkit";

const toogleMenuSlice = createSlice({
  name: "toogleMenu",
  initialState: {
    activity: false,
    task: false,
    profile: true,
  },
  reducers: {
    openActivity(state) {
      state.activity = true;
      state.task = false;
      state.profile = false;
    },
    openTask(state) {
      state.activity = false;
      state.task = true;
      state.profile = false;
    },
    openProfile(state) {
      state.activity = false;
      state.task = false;
      state.profile = true;
    },
  },
});
export default toogleMenuSlice.reducer;
export const { openActivity, openProfile, openTask } = toogleMenuSlice.actions; //action creators
