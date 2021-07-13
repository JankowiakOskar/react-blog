import React from 'react';
import { useParams } from 'react-router-dom';
import { useComments } from '../../hooks/useComments';
import Comments from '../../components/Comments/Comments';

const CommentsContainer = () => {
  const { id } = useParams();
  const { articleComments } = useComments({ articleId: id });

  return <Comments comments={articleComments} />;
};

export default CommentsContainer;
