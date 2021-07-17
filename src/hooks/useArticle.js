import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchArticleById,
  updateArticle as updateArticleAction,
} from 'actions/blogActions';
import { CLEAR_ARTICLE_ERROR } from 'actions/actionTypes';

export const useArticle = ({ articleId }) => {
  const dispatch = useDispatch();
  const {
    data: articlesData,
    areLoading,
    error,
  } = useSelector((state) => state.articles);
  const history = useHistory();

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

  useEffect(() => {
    if (error.message) {
      const handleErrorRedirect = () => {
        dispatch({ type: CLEAR_ARTICLE_ERROR });
        history.push('/404');
      };
      handleErrorRedirect();
    }
  }, [error.message]);

  return {
    article: searchedArticle,
    isLoadingArticle: areLoading,
    updateArticle,
  };
};
