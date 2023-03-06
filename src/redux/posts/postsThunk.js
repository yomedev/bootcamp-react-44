import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNewPostService, deletePostService, getPostsService } from "../../services/postsService";
import {
  getPostsFulfilled,
  getPostsPending,
  getPostsRejected,
} from "./postsAction";

// export const getPostsThunk = (params) => async (dispatch) => {
//   dispatch(getPostsPending());
//   try {
//     const posts = await getPostsService(params);
//     dispatch(getPostsFulfilled(posts)); // { type: 'posts/getPostsFulfilled', payload: posts}
//   } catch (error) {
//     dispatch(getPostsRejected());
//   }
// };

export const getPostsThunk = createAsyncThunk(
  "posts/getPosts",
  async (params, { rejectWithValue }) => {
    try {
      return await getPostsService(params);
    } catch {
      return rejectWithValue();
    }
  }
);

export const deletePostThunk = createAsyncThunk(
  "posts/deletePost",
  async ({postId, params}, { rejectWithValue, dispatch }) => {
    try {
     await deletePostService(postId);
     dispatch(getPostsThunk(params))
    } catch {
      return rejectWithValue();
    }
  }
);


// export const createNewPostThunk = createAsyncThunk(
//   "posts/createNewPost",
//   async (body, { rejectWithValue, dispatch }) => {
//     try {
//      const newPost = await createNewPostService(body);
//      return newPost
//     } catch {
//       return rejectWithValue();
//     }
//   }
// );


