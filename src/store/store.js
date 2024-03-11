import { configureStore } from "@reduxjs/toolkit";
import timerToggleSlice from "./slices/timerToggleSlice";
import ticketsSlice from "./slices/ticketsSlice";
import startTicketSlice from "./slices/startTicketSlice";

export const store = configureStore({
  reducer: {
    timerToggle: timerToggleSlice,
    tickets: ticketsSlice,
    infoAboutTicket: startTicketSlice,
  },
});
