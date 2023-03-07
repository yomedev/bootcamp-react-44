import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { counterReducer } from "./counter/counterReducer";
import { postsApi } from "./posts/postsApi";
import { postsReducer } from "./posts/postsSlice";
// import { usersReducer } from "./users/usersReducer";
import { usersReducer } from "./users/usersSlice";

const persistConfig = {
  storage,
  key: "users",
  whitelist: ["data"],
  // blacklist: ['isModalOpen', 'filter']
};

const usersPersistedReducer = persistReducer(persistConfig, usersReducer);

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersPersistedReducer,
  posts: postsReducer,
  [postsApi.reducerPath]: postsApi.reducer,
});
