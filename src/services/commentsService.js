import axios from "axios";

const commentsApi = axios.create({
  baseURL: 'https://dummyjson.com/',
})

const defaultParams = {
  limit: 4,
};

export const createNewCommentService = async (postId, body) => {
  const { data } = await commentsApi.post(`/posts/${postId}/comments`, body);
  return data;
};

export const getCommentsListService = async (postId, params = {}) => {
  const { data } = await commentsApi.get(`/posts/${postId}/comments`, {
    params: { ...defaultParams, ...params },
  });
  return data;
};

export const deleteCommentService = async commentId => {
  return commentsApi.delete(`/comments/${commentId}`);
};