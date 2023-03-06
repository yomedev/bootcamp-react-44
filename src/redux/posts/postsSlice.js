import { createSlice } from "@reduxjs/toolkit";
import {
  getPostsFulfilled,
  getPostsPending,
  getPostsRejected,
} from "./postsAction";
import { postsInitialState } from "./postsInitialState";
import { createNewPostThunk, deletePostThunk, getPostsThunk } from "./postsThunk";

const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostsThunk.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.posts = payload;
      })
      .addCase(getPostsThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(deletePostThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletePostThunk.fulfilled, (state, { payload }) => {
        state.status = "success";
        // state.posts = payload;
      })
      .addCase(deletePostThunk.rejected, (state) => {
        state.status = "error";
      })
      // .addCase(createNewPostThunk.fulfilled, (state, {payload}) => {
      //   state.posts.unshift(payload)
      // })
  },
});

export const postsReducer = postsSlice.reducer;
