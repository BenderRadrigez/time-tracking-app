import { addDoc, collection } from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../../app/firebase";

const addUsersToDb = async (userData) => {
  try {
    const newUserRef = await addDoc(collection(db, "users"), userData);
    localStorage.setItem("id", newUserRef.id);
  } catch (error) {
    throw new Error("Error adding user to database");
  }
};

export const addUser = createAsyncThunk("users/addUser", async (userData) => {
  try {
    return await addUsersToDb(userData);
  } catch (error) {
    console.log(error);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    error: null,
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = [action.payload, ...state.users];
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
