import axios from "axios";

const POSTS_PER_PAGE = 9;

axios.defaults.baseURL = "https://dummyjson.com";

export const getPostsService = async (skip) => {
  const { data } = await axios.get("/posts", {
    params: {
      limit: POSTS_PER_PAGE,
      skip
    },
  });

  const postsWithImages = await addImagesToPosts(data.posts);

  return { ...data, posts: postsWithImages };
};

export const getPostsByQuery = async (search, page = 1) => {
  const { data } = await axios.get("/posts/search", {
    params: {
      q: search,
      page
    },
  });

  const postsWithImages = await addImagesToPosts(data.posts);

  return { ...data, posts: postsWithImages };
};





const addImagesToPosts = async (posts) => {
  const responses = await Promise.all(
    posts.map(({ tags }) =>
      axios.get("https://pixabay.com/api/", {
        params: {
          key: "29943402-7b214b60182b7d41669576685",
          q: tags[0],
        },
      })
    )
  );
  const postsImages = responses.map((res) => res.data.hits[0].webformatURL);

  return posts.map((post, index) => ({
    ...post,
    preview_image: postsImages[index],
    created_at: new Date(),
  }));
};
