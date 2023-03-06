import { createAction } from "@reduxjs/toolkit";

export const getPostsPending = createAction('posts/getPostsPending')
export const getPostsFulfilled = createAction('posts/getPostsFulfilled')
export const getPostsRejected = createAction('posts/getPostsRejected')