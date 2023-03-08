import axios from "axios";
import { privateApi } from "../http/http";

const POSTS_PER_PAGE = 9;

const postsApi = axios.create({
  baseURL: 'http://70.34.201.18:4444/',
});

export const getPostsService = async (params) => {
  const { data } = await postsApi.get("posts", {
    params: {
      ...params,
      limit: POSTS_PER_PAGE
    },
  });
  return data;
};

export const getSinglePostService = async (id, params) => {
  const { data } = await postsApi.get(`/posts/${id}`, { params });
  return data;
};

export const deletePostService = async (postId) => {
  const { data } = await postsApi.delete("posts/" + postId);
  return data;
};


export const createNewPostService = async (body) => {
  const { data } = await privateApi.post("posts", body);
  return data;
};

