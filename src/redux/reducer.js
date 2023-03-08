import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { counterReducer } from "./counter/counterReducer";
import { postsApi } from "./posts/postsApi";
import { postsReducer } from "./posts/postsSlice";
import { profileReducer } from "./profile/profileSlice";
// import { usersReducer } from "./users/usersReducer";
import { usersReducer } from "./users/usersSlice";

const persistConfig = {
  storage,
  key: "users",
  whitelist: ["data"],
  // blacklist: ['isModalOpen', 'filter']
};

const usersPersistedReducer = persistReducer(persistConfig, usersReducer);

const authPersistConfig = {
  storage, 
  key: 'auth',
}

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersPersistedReducer,
  posts: postsReducer,
  auth: authPersistedReducer,
  profile: profileReducer,
  [postsApi.reducerPath]: postsApi.reducer,
});
