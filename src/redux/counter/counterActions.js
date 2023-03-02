import { createAction } from "@reduxjs/toolkit";
// import { DISLIKE, LIKE } from "./counterTypes";

// export const likeActionPrev = (number) => ({type: LIKE, payload: number})
export const likeAction = createAction('counter/like') // -> {type: LIKE, payload: 10}

// likeAction.toString = () => type
export const dislikeAction = createAction('counter/dislike')

