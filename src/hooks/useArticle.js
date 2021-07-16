import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchArticleById,
  updateArticle as updateArticleAction,
} from 'actions/blogActions';

export const useArticle = ({ articleId }) => {
  const dispatch = useDispatch();
  const { data: articlesData, areFetching } = useSelector(
    (state) => state.articles,
  );

  const searchedArticle = articlesData.find(
    (article) => String(article.id) === String(articleId),
  );

  const updateArticle = (newData) =>
    dispatch(updateArticleAction(articleId, newData));

  useEffect(() => {
    const controller = new AbortController();
    if (!searchedArticle) {
      dispatch(fetchArticleById(controller, articleId));
    }
    return () => {
      controller.abort();
    };
  }, [searchedArticle]);

  return {
    article: searchedArticle,
    isLoading: areFetching,
    updateArticle,
  };
};
