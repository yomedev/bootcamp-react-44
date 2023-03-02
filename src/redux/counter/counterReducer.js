import { createReducer } from "@reduxjs/toolkit";
import { counterInitialState } from "./counterInitialState";
import { DISLIKE, LIKE } from "./counterTypes";
import {likeAction, dislikeAction} from './counterActions'

const counter = {
  [LIKE]: (state, action) => ({ ...state, likes: state.likes + 1 }), // 'LIKE'
  [DISLIKE]: (state, action) => ({ ...state, dislikes: state.dislikes + 1 }) // 'DISLIKE'
}

/*
const counter = {
  LIKE: () => {},
  DISLIKE: () => {}
}
counter.LIKE()
 */
// const type = 'LIKE'
// counter.DISLIKE()
// counter[type]()


// console.log(counter);

// export const counterReducer = (state = counterInitialState, action) => {

//   return counter[action.type] ? counter[action.type](state) : state


//   // switch (action.type) {
//   //   case LIKE:
//   //     return { ...state, likes: state.likes + 1 };
//   //   case DISLIKE:
//   //     return { ...state, dislikes: state.dislikes + 1 };
//   //   default:
//   //     return state;
//   // }
// };

export const counterReducer = createReducer(counterInitialState, {
  [likeAction]: (state) => ({ ...state, likes: state.likes + 1 }), // 'LIKE'
  [dislikeAction]: (state, action) => ({ ...state, dislikes: state.dislikes + action.payload }), // 'DISLIKE'
});

// if (typeof likeAction === 'function') likeAction.toString()
