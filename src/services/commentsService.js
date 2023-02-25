import axios from "axios";

const commentsApi = axios.create({
  baseURL: 'https://dummyjson.com/',
  params: {
    limit: 3
  }
})
