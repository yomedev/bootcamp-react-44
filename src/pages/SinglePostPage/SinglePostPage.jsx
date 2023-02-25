import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { getSinglePostService } from "../../services/postsService";
import { Loader } from "../../components/Loader/Loader";

export const SinglePostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getSinglePostService(postId)
      .then(setPost)
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => setIsLoading(false));
  }, [postId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    post && (
      <>
        <img
          src={post.image}
          alt={post.title}
          className="img-fluid mb-4"
          style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="mb-5">{post.title}</h1>

        <div>{post.body}</div>

        <a href={`/posts/${postId}/comments`} className="btn btn-primary my-4">
          Vew post comments
        </a>
      </>
    )
  );
};
