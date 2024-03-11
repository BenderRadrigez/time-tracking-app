import { createSlice } from "@reduxjs/toolkit";

const startTicketSlice = createSlice({
  name: "startTicketSlice",
  initialState: { id: null, title: null, time: null },
  reducers: {
    getInfoAboutTicket(state, action) {
        state.id=action.payload.id;
        state.title=action.payload.title;
        state.time =action.payload.time;
    },
    clearInfoAboutTicket(state){
      state = {id :null ,title : null, time: null}
    },
  }
});

export default startTicketSlice.reducer;
export const {getInfoAboutTicket, clearInfoAboutTicket} = startTicketSlice.actions;
