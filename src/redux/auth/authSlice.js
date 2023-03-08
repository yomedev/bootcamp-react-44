import { createSlice } from "@reduxjs/toolkit";
import { fetchStatus } from "../../constants/fetchStatus";
import { getProfileThunk } from "../profile/profileThunk";
import { authInitialState } from "./authInitialState";
import { loginThunk } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    logoutAction: () => authInitialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = fetchStatus.Loading;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.access_token = payload.access_token;
        state.token_type = payload.token_type;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.status = fetchStatus.Error;
      })
      .addCase(getProfileThunk.rejected, () => authInitialState);
  },
});

export const authReducer = authSlice.reducer;

export const { logoutAction } = authSlice.actions;
