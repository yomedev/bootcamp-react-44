import React, { useState } from "react";
import { PostsItem } from "../../components/Posts";
import { useGetPostsQuery, useLazyGetPostsQuery } from "../../redux/posts/postsApi";

export const RtkQueryPosts = () => {
  const {data, status} = useGetPostsQuery();
  // const [getPosts, { data, status }] = useLazyGetPostsQuery();
  if (status === "fulfilled") {
    console.log(data);
  }
  return (
    <>
      {!data ? (
        <p>No posts yet</p>
      ) : (
        <div className="container-fluid g-0 pb-5 mb-5">
          <div className="row">
            {data?.data.map((post) => (
              <PostsItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
