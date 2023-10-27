import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
  },
  reducers: {
    getUserFetch: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    getUserFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getUserFailure, getUserFetch, getUserSuccess } =
  userSlice.actions;

export default userSlice.reducer;
