import axios from "axios";

const POSTS_PER_PAGE = 9;

axios.defaults.baseURL = "https://dummyjson.com";

export const getPostsService = async (skip) => {
  const { data } = await axios.get("/posts", {
    params: {
      limit: POSTS_PER_PAGE,
      skip,
    },
  });

  const postsWithImages = await addImagesToPosts(data.posts);

  return { ...data, posts: postsWithImages };
};

export const getPostsByQuery = async (search, page = 1) => {
  const { data } = await axios.get("/posts/search", {
    params: {
      q: search,
      page,
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

  const duplicatedTags = new Set(posts.map((post) => post.tags[0]));

  console.log(duplicatedTags);
  const postsImages = responses.map((res) => res.data.hits);
  const skipImages = {};
  return posts.map((post, index) => {
    const firstPostTag = post.tags[0]
    if (!skipImages[firstPostTag]) {

      skipImages[firstPostTag] = 0;
    }
    console.log(firstPostTag);
    if (duplicatedTags.has(firstPostTag)) {
      skipImages[firstPostTag] += 1;
    }
    const imageIndex = skipImages[firstPostTag]
    return {
      ...post,
      preview_image: postsImages[index][imageIndex].webformatURL,
      created_at: new Date(),
    };
  });
};
