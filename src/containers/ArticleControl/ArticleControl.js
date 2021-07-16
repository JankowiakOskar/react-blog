import React from 'react';
import { useParams } from 'react-router-dom';
import LoaderProvider from 'providers/LoaderProvider';
import { useArticle } from 'hooks/useArticle';
import ArticleView from 'components/ArticleView/ArticleView';

const ArticleControl = () => {
  const { id } = useParams();
  const { article, isLoading, updateArticle } = useArticle({ articleId: id });

  return (
    <LoaderProvider isLoading={isLoading}>
      {article ? (
        <ArticleView
          title={article.title}
          articleContent={article.body}
          isLiked={article.isLiked ? article.isLiked : false}
          handleUpdate={updateArticle}
        />
      ) : null}
    </LoaderProvider>
  );
};

export default ArticleControl;
