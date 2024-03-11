import { configureStore } from "@reduxjs/toolkit";
import timerToggleSlice from "./slices/timerToggleSlice";
import ticketsSlice from "./slices/ticketsSlice";

export const store = configureStore({
  reducer: {
    timerToggle: timerToggleSlice,
    tickets: ticketsSlice,
  },
});
