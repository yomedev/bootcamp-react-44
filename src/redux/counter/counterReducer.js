import { counterInitialState } from "./counterInitialState";
import { DISLIKE, LIKE } from "./counterTypes";

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case LIKE:
      return { ...state, likes: state.likes + 1 };
    case DISLIKE:
      return { ...state, dislikes: state.dislikes + 1 };
    default:
      return state;
  }
};