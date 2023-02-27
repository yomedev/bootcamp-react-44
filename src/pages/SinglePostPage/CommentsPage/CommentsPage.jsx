import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { CommentList } from '../../../components/CommentList';

export const CommentsPage = () => {
  const [comments, setComments] = useState(null);
  const location = useLocation()
  console.log(location);
  return (
    <>
      <CommentList comments={comments} setComments={setComments} />
    </>
  );
};
