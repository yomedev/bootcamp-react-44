import axios from "axios";

const commentsApi = axios.create({
  baseURL: 'https://dummyjson.com/',
  params: {
    limit: 3
  }
})

export const getComments = async (postId) => {
  const {data} = await commentsApi.get('comments/post/'+ postId)
  return data
}