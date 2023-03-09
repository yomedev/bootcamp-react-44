import { privateApi, publicApi } from "../http/http";

const POSTS_PER_PAGE = 9;

export const getPostsService = async (params) => {
  const { data } = await publicApi.get("posts", {
    params: {
      ...params,
      limit: POSTS_PER_PAGE
    },
  });
  return data;
};

export const getSinglePostService = async (id, params) => {
  const { data } = await publicApi.get(`/posts/${id}`, { params });
  return data;
};

export const deletePostService = async (postId) => {
  const { data } = await privateApi.delete("posts/" + postId);
  return data;
};


export const createNewPostService = async (body) => {
  const { data } = await privateApi.post("posts", body);
  return data;
};

