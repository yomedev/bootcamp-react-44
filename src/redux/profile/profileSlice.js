import { createSlice } from "@reduxjs/toolkit";
import { fetchStatus } from "../../constants/fetchStatus";
import { profileInitialState } from "./profileInitialState";
import { getProfileThunk } from "./profileThunk";

const profileSlice = createSlice({
  name: "profile",
  initialState: profileInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProfileThunk.pending, (state) => {
        state.status = fetchStatus.Loading;
      })
      .addCase(getProfileThunk.fulfilled, (state, {payload}) => {
        state.status = fetchStatus.Success;
        state.data = payload
      })
      .addCase(getProfileThunk.rejected, (state) => {
        state.status = fetchStatus.Error;
      })
  },
});

export const profileReducer = profileSlice.reducer;
