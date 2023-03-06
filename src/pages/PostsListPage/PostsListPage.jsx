import { useEffect, useRef, useState } from "react";
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
  const location = useLocation();
  const isRegister = location.state?.isRegister ?? false;

  const [posts, setPosts] = useState(null);
  const [status, setStatus] = useState(fetchStatus.Idle);

  useEffect(() => {
    if (isRegister) {
      toast.info("Welcome");
    }
  }, [isRegister]);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const page = searchParams.get("page") ?? 1;

  useEffect(() => {
    const fetchPosts = async () => {
      setStatus(fetchStatus.Loading);
      try {
        const postsRes = await getPostsService({ search, page });
        setPosts(postsRes);
        setStatus(fetchStatus.Success);
      } catch (error) {
        setStatus(fetchStatus.Error);
      }
    };
    fetchPosts();
  }, [page, search]);

  const listRef = useRef(null);
  const scrollIndexRef = useRef(null);

  useEffect(() => {
    scrollIndexRef.current = listRef.current?.children?.length;
  }, [page]);

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
  return (
    <>
      <PostsSearch />

      {!posts ? (
        <p>No posts yet</p>
      ) : (
        <div className="container-fluid g-0 pb-5 mb-5">
          <div ref={listRef} className="row">
            {posts?.data.map((post) => (
              <PostsItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}

      <div className="pagination">
        <div className="btn-group my-2 mx-auto btn-group-lg">
          {[...Array(posts.total_pages)].map((_, index) => (
            <Button
              key={index}
              disabled={posts.page === index + 1}
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
