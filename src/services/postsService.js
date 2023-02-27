import axios from "axios";

const POSTS_PER_PAGE = 9;

const postsApi = axios.create({
  baseURL: "https://dummyjson.com/",
  params: {
    limit: POSTS_PER_PAGE,
  },
});

export const getPostsService = async ({ search = "", page = 1 }) => {
  const endpoint = search ? "posts/search" : "posts";
  const skip = (page - 1) * POSTS_PER_PAGE;
  const { data } = await postsApi.get(endpoint, {
    params: {
      q: search || undefined,
      skip: skip || undefined,
    },
  });

  const postsWithImages = await addImagesToPosts(data.posts);

  return { ...data, posts: postsWithImages };
};

export const createNewPostService = async (body) => {
  const {data} = await postsApi.post('/posts/add', body)
  return data
}

const imagesApi = axios.create({
  baseURL: "https://pixabay.com/api/",
  params: {
    key: "29943402-7b214b60182b7d41669576685",
  },
});

const duplicatedImagesCounter = new Map();

export const getSinglePostService = async (id) => {
  const { data } = await postsApi.get(`posts/${id}`);
  const postWithImage = await imagesApi.get("", {
    params: {
      q: data.tags[0],
    },
  })
  return {
    ...data,
    image: postWithImage.data.hits[0].largeImageURL,
    created_at: new Date(),
  };
};


const addImagesToPosts = async (posts) => {

  const responses = await Promise.all(
    posts.map(({ tags }) =>
      imagesApi.get("", {
        params: {
          q: tags[0],
        },
      })
    )
  );

  const postsImages = responses.map((res) => res.data.hits);

  return posts.map((post, index) => {
    const firstPostTag = post.tags[0];

    if (!duplicatedImagesCounter.has(firstPostTag)) {
      duplicatedImagesCounter.set(firstPostTag, 0);
    } else {
      const prevValue = duplicatedImagesCounter.get(firstPostTag);
      duplicatedImagesCounter.set(firstPostTag, prevValue + 1);
    }

    const imageIndex = duplicatedImagesCounter.get(firstPostTag);

    return {
      ...post,
      preview_image: postsImages[index][imageIndex].webformatURL,
      created_at: new Date(),
    };
  });
};
