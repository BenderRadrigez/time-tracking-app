import { createSlice } from "@reduxjs/toolkit";

const TicketsSlice = createSlice({
  name: "tickets",
  initialState: {ticketsList: []},
  reducers: {
    addTicket(state, action) {
      state.ticketsList = [...state.ticketsList, action.payload];
    },
    removeTicket(state, action) {
      state.ticketsList = state.ticketsList.filter((el) => {
        return action.payload.id === el.id;
      });
    },
  },
});

export default TicketsSlice.reducer;
export const { addTicket, removeTicket } = TicketsSlice.actions;
