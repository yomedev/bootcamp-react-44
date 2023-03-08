import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import {getCommentsListService } from '../../services/commentsService';

export const CommentList = ({ comments, setComments }) => {
  const {postId} = useParams()

  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = useCallback(
    () =>
    getCommentsListService(postId)
        .then((data) => setComments(data.comments))
        .catch(() => {
          toast.error('Something went wrong!');
        }),
    [postId, setComments],
  );

  useEffect(() => {
    setIsLoading(true);
    fetchComments().finally(() => setIsLoading(false));
  }, [fetchComments]);



  if (isLoading) {
    return (
      <div className="spinner-border text-primary">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!comments?.length) {
    return <p>No comments yet!</p>;
  }

  return (
    <>
      <ul className="list-group">
        {comments.map(comment => (
          <li key={comment.id} className="list-group-item list-group-item-action py-4">

            <div className="mb-4 mt-3"  >{comment.body}</div>

            <div className="btn-group">
              <button type="button" className="btn btn-outline-danger" >
                Delete comment
              </button>
              <button type="button" className="btn btn-outline-primary">
                Edit comment
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};