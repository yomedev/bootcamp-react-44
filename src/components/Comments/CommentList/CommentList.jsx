import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import {getCommentsListService, deleteCommentService } from '../../../services/commentsService';

export const CommentList = ({ comments, setComments }) => {
  const {postId} = useParams()

  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = useCallback(
    () =>
    getCommentsListService(postId)
        .then((data) => setComments(data.data))
        .catch(() => {
          toast.error('Something went wrong!');
        }),
    [postId, setComments],
  );

  useEffect(() => {
    setIsLoading(true);
    fetchComments().finally(() => setIsLoading(false));
  }, [fetchComments]);

  const handleDeleteComment = commentId => {
    deleteCommentService(commentId)
      .then(() => {
        setComments(prev => ({ ...prev, data: prev.data.filter(item => item.id !== commentId) }));
        toast.success('You have successfully deleted your comment!');
      })
      .catch(() => {
        toast.error('Something went wrong!');
      });
  };

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

            <div className="mb-4 mt-3"  >{comment.content}</div>

            <div className="btn-group">
              <button onClick={handleDeleteComment} type="button" className="btn btn-outline-danger" >
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