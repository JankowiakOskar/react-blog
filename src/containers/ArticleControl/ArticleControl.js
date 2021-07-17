import React from 'react';
import { useParams } from 'react-router-dom';
import LoaderProvider from 'providers/LoaderProvider';
import { useArticle } from 'hooks/useArticle';
import ArticleView from 'components/ArticleView/ArticleView';

const ArticleControl = () => {
  const { id } = useParams();
  const { article, isLoadingArticle, updateArticle } = useArticle({
    articleId: id,
  });

  return (
    <LoaderProvider isLoading={isLoadingArticle}>
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
