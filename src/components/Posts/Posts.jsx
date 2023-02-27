import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Button } from "../Button";

import { PostsItem } from "./PostsItem/PostsItem";
import { PostsSearch } from "./PostsSearch/PostsSearch";
import { PostsLoader } from "./PostsLoader/PostsLoader";
import { getPostsService } from "../../services/postsService";

const fetchStatus = {
  Idle: "idle",
  Loading: "loading",
  Success: "success",
  Error: "error",
};

export const Posts = () => {
  const [status, setStatus] = useState(fetchStatus.Idle);
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const searchParams = useSearchParams();
  console.log(searchParams);

  const listRef = useRef(null);
  const scrollIndexRef = useRef(null);

  const fetchPosts = useCallback(async () => {
    try {
      setStatus(fetchStatus.Loading);
      const resPosts = await getPostsService({ page, search });
      setPosts((prev) => ({
        ...resPosts,
        posts: page === 1 ? resPosts.posts : [...prev.posts, ...resPosts.posts],
      }));
      setStatus(fetchStatus.Success);
    } catch {
      setStatus(fetchStatus.Error);
    }
  }, [page, search]);

  useEffect(() => {
    fetchPosts();
    scrollIndexRef.current = listRef.current?.children?.length;
  }, [page, search, fetchPosts]);

  useEffect(() => {
    listRef.current?.children[scrollIndexRef.current]?.scrollIntoView({
      behavior: "smooth",
    });
  }, [posts?.posts]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleChangePage = (page) => {
    return () => setPage(page)
  }

  const handleChangeSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  if (status === fetchStatus.Loading || status === fetchStatus.Idle) {
    return <PostsLoader />;
  }

  if (status === fetchStatus.Error) {
    return <p>Something went wrong</p>;
  }

  if (!posts) {
    return <></>;
  }

  return (
    <>
      <PostsSearch onSubmitSearch={handleChangeSearch} />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div ref={listRef} className="row">
          {posts?.posts.map((post) => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group my-2 mx-auto btn-group-lg">
          {[...Array(Math.ceil(posts.total / posts.limit))].map((_, index) => (
            <Button className="btn-primary page-item" onClick={handleLoadMore(index + 1)}>
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
