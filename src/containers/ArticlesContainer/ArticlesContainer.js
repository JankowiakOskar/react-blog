import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from 'actions/blogActions';
import LoaderProvider from 'providers/LoaderProvider';
import Articles from 'components/Articles/Articles';

const ArticlesContainer = () => {
  const dispatch = useDispatch();
  const { data: articlesData, areLoading } = useSelector(
    (state) => state.articles,
  );

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchArticles(controller));
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <LoaderProvider isLoading={areLoading}>
      <Articles articles={articlesData} />
    </LoaderProvider>
  );
};

export default ArticlesContainer;
