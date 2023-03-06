import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { getPostsForMiddleware } from "../services/postsService";

const middleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return next(action(store.dispatch));
  }

  return next(action);
};

export const getPostsThunk = () => async (dispatch) => {
  const { data } = await getPostsForMiddleware();
  dispatch({ type: "fetchPosts", payload: data });
};

// const reducer = (state, action) => {
//   switch(action.type) {
//     case 'fetchPosts': return { posts: action.payload}
//     default: return state
//   }
// }

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(middleware)));

// middleware(store)(next)(action)

// const z = 7
// const z2 = 9
// const sum = (a, b) => a + b
// sum(z, z2)

// const sum2 = (a) => (b) => a + b

// const sumTwo = sum2(2) // (b) => 2 + b
// sumTwo(3) // 5
