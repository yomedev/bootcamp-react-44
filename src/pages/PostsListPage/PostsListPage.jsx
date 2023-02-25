import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPostsService } from "../../services/postsService";
import { Button } from "../../components/Button";
import { PostsItem, PostsLoader, PostsSearch } from "../../components/Posts";

const fetchStatus = {
  Idle: "idle",
  Loading: "loading",
  Success: "success",
  Error: "error",
};

export const PostsListPage = () => {
  const [status, setStatus] = useState(fetchStatus.Idle);
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

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

  const handleChangeSearch = (value) => {
    // setSearch(value);
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
          <Button onClick={handleLoadMore}>Load more</Button>
        </div>
      </div>
    </>
  );
};
