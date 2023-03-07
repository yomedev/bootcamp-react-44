import { createSlice } from "@reduxjs/toolkit";
import { usersInitialState } from "./usersInitialState";

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    deleteUser: (state, { payload }) => {
      state.data = state.data.filter((user) => user.id !== payload);
    },
    createNewUser: {
      prepare: (user) => ({ payload: { ...user, id: Date.now() } }),

      reducer: (state, { payload }) => {
        state.data.unshift(payload);
      },
    },
    toggleModalAction: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    changeSearchAction: (state, { payload }) => {
      state.search = payload;
    },
    clearState: () => usersInitialState,
  },
});

export const usersReducer = usersSlice.reducer;

export const { deleteUser, createNewUser, toggleModalAction, changeSearchAction } =
  usersSlice.actions;
