import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "../Button";

import { PostsItem } from "./PostsItem";
import { PostsSearch } from "./PostsSearch";
import { PostsLoader } from "./PostsLoader";
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
          <Button onClick={handleLoadMore}>Load more</Button>
        </div>
      </div>
    </>
  );
};

// export class Posts extends Component {
//   state = {
//     posts: null,
//     status: fetchStatus.Idle,
//     page: 1,
//   };

//   async componentDidMount() {
//     try {
//       this.setState({ status: fetchStatus.Loading });
//       const postsRes = await getPostsService();
//       this.setState({ posts: postsRes, status: fetchStatus.Success });
//     } catch (error) {
//       this.setState({ status: fetchStatus.Error });
//     }
//   }

//   handleChangePage = async (page) => {
//     const skip = POSTS_PER_PAGE * (page - 1);
//     const postsRes = await getPostsService(skip);
//     this.setState({ posts: postsRes });
//   };

//   handleLoadMore = async () => {
//     this.setState((prevState) => ({ page: prevState.page + 1 }));
//     const skip = POSTS_PER_PAGE * this.state.page;
//     const postsRes = await getPostsService(skip);

//     // state = {
//     //   posts: {
//     //     posts: [],
//     //     limit: 9,
//     //     total: 150,
//     //   },
//     //   status: "",
//     // };

//     this.setState((prevState) => ({
//       posts: {
//         ...postsRes,
//         posts: [...prevState.posts.posts, ...postsRes.posts],
//       },
//     }));
//   };

//   handleChangeSearch = async (search) => {
//     const postsRes = await getPostsByQuery(search);
//     this.setState({ posts: postsRes });
//   };

//   render() {
//     const { status, posts } = this.state;

//     // const pages = Math.ceil(posts?.total / posts?.limit);

//     if (status === fetchStatus.Loading || status === fetchStatus.Idle) {
//       return <PostsLoader />;
//     }

//     if (status === fetchStatus.Error) {
//       return <p>Something went wrong</p>;
//     }

//     if (!posts) {
//       return <></>;
//     }

//     return (
//       <>
//         <PostsSearch onSubmitSearch={this.handleChangeSearch} />

//         <div className="container-fluid g-0 pb-5 mb-5">
//           <div className="row">
//             {posts.posts.map((post) => (
//               <PostsItem key={post.id} post={post} />
//             ))}
//           </div>
//         </div>

//         <div className="pagination">
//           <div className="btn-group my-2 mx-auto btn-group-lg">
//             {/* {[...Array(pages)].map((_, index) => (
//               <Button
//                 onClick={() => this.handleChangePage(index + 1)}
//                 key={index}
//               >
//                 {index + 1}
//               </Button>
//             ))} */}
//             <Button onClick={this.handleLoadMore}>Load more</Button>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
