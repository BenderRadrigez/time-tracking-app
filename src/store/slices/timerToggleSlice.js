import { createSlice } from "@reduxjs/toolkit";

const timerToggleSlice = createSlice({
  name: "counter",
  initialState: { runTimer: false },
  reducers: {
    toggleTimerStartStop(state) {
      state.runTimer = !state.runTimer;
    },
  },
});

export default timerToggleSlice.reducer;
export const { toggleTimerStartStop } = timerToggleSlice.actions;
