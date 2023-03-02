import { createAction, createSlice } from "@reduxjs/toolkit";
import { usersInitialState } from "./usersInitialState";

// const store = {
//   state: null
// }

// const testReducer  = (state, action) => {
//   return {...state}
// }

// const copyState = {...state}

// const immerReducer = (state, action) => {
//   return state
// }

// export const createNewUserAction = createAction(
//   "users/createNewUser",
//   (user) => ({ payload: { ...user, id: Date.now() } })
// );

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
    clearState: () => usersInitialState,
  },
  // extraReducers: {
  //   [createNewUserAction]: (state, { payload }) => {
  //     state.data.unshift(payload);
  //   },
  // },
});

export const usersReducer = usersSlice.reducer;

export const { deleteUser, createNewUser, toggleModalAction } =
  usersSlice.actions;

console.log(usersSlice);
