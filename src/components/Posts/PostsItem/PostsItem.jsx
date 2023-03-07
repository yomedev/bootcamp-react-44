import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import { cutString } from "../../../helpers/cut-string";
import { useDeletePostMutation } from "../../../redux/posts/postsApi";
import { deletePostThunk } from "../../../redux/posts/postsThunk";
import { deletePostService } from "../../../services/postsService";

export const PostsItem = ({ post }) => {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();

  const [deletePost, { isSuccess }] = useDeletePostMutation();
  console.log(isSuccess);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const page = searchParams.get("page");

  const dispatch = useDispatch();

  const handleDeletePost = () => {
    // dispatch(deletePostThunk({ postId: post.id, params: { page, search } }));
    deletePost(post.id);
  };
  return (
    <div className="col-12 col-xl-6 col-xxl-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={post.title}
          src={post.preview_image}
          className="card-img-top"
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">{cutString(post.content, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Reactions: {post.views}</li>
            <li className="list-group-item">
              Created: {formatDistanceToNow(new Date(post.created_at))}
            </li>
          </ul>

          {isAuth && (
            <div className="d-flex">
              <button
                onClick={handleDeletePost}
                type="button"
                className="btn btn-danger"
              >
                Delete post
              </button>

              <Link
                to={`/posts/${post.id}`}
                state={{ from: location }}
                className="btn btn-primary ms-3"
              >
                Read post
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
