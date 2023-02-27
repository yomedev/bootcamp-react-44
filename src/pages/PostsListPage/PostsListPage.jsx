import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getPostsService } from "../../services/postsService";
import { Button } from "../../components/Button";
import { PostsItem, PostsLoader, PostsSearch } from "../../components/Posts";
import { toast } from "react-toastify";

const fetchStatus = {
  Idle: "idle",
  Loading: "loading",
  Success: "success",
  Error: "error",
};

export const PostsListPage = () => {
  const [status, setStatus] = useState(fetchStatus.Idle);
  const [posts, setPosts] = useState(null);
  // const [page, setPage] = useState(1);
  const location = useLocation();
  const isRegister = location.state?.isRegister ?? false;

  useEffect(() => {
    if (isRegister) {
      toast.info("Welcome");
    }
  }, [isRegister]);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const page = searchParams.get("page") ?? 1;

  const listRef = useRef(null);
  const scrollIndexRef = useRef(null);

  const fetchPosts = useCallback(async () => {
    try {
      setStatus(fetchStatus.Loading);
      const resPosts = await getPostsService({ page, search });
      setPosts(resPosts);
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
      <PostsSearch />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div ref={listRef} className="row">
          {posts?.posts.map((post) => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group my-2 mx-auto btn-group-lg">
          {[...Array(10)].map((_, index) => (
            <Button
              key={index}
              disabled={page === index + 1}
              className="btn-primary page-item"
              onClick={() => setSearchParams({ page: index + 1, search })}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
