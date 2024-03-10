import { configureStore } from "@reduxjs/toolkit";
import timerToggleSlice from "./slices/timerToggleSlice";

export const store = configureStore({
    reducer: {
        timerToggle : timerToggleSlice
    }
})