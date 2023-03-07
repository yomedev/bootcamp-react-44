import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://70.34.201.18:8080/" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page = 1) => ({
        url: "posts",
        method: "GET",
        params: {
          limit: 9,
          page: page,
        },
      }),
      providesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `posts/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery, useDeletePostMutation } =
  postsApi;
