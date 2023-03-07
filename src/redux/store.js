import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { postsApi } from "./posts/postsApi";
import { rootReducer } from "./reducer";

// const midlleware = (store) => (next) => (action) => {
//   console.log(action);
//   return next(action);
// };

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(midlleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(postsApi.middleware),
});

export const persistor = persistStore(store);
