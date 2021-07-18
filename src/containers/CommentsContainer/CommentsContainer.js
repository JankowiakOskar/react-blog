import React from 'react';
import { useParams } from 'react-router-dom';
import { useComments } from 'hooks/useComments';
import LoaderProvider from 'providers/LoaderProvider';
import Comments from 'components/Comments/Comments';

const CommentsContainer = () => {
  const { id } = useParams();
  const { articleComments, areLoadingComments } = useComments({
    articleId: id,
  });

  return (
    <LoaderProvider isLoading={areLoadingComments}>
      <Comments comments={articleComments} />
    </LoaderProvider>
  );
};

export default CommentsContainer;
