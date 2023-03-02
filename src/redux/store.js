import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { rootReducer } from "./reducer";



export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  // reducer: {
  //   counter: counterReducer,
  //   users: usersReducer
  // },
});

export const persistor = persistStore(store)

// import { counterReducer } from './counter/counterReducer';
// import { usersReducer } from './users/usersReducer';
// import { initialState } from "./initialState";

// export const store = createStore(reducer, initialState);
// export const store = createStore(rootReducer, composeWithDevTools());
// if (typeof reducer === 'object') {
//   reducer = combineReducers(reducer)
// }

// console.log(store.getState());
// store.dispatch({ type: INCREMENT });
// console.log(store.getState());
// store.dispatch({ type: DECREMENT });
// console.log(store.getState());
// store.dispatch({ type: WITHDRAW, payload: 50 });
// console.log(store.getState());
