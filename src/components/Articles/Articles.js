import React from 'react';
import PropTypes from 'prop-types';
import ArticlePreview from 'components/ArticlePreview/ArticlePreview';

const Articles = ({ articles }) => {
  if (!articles.length || !articles) {
    return <p>No articles</p>;
  }
  return (
    <>
      {articles.map(({ id, title }) => (
        <ArticlePreview key={`${id}`} id={id} title={title} />
      ))}
    </>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

export default Articles;
