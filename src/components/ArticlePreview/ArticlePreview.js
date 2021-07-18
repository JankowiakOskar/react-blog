import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { route } from 'routes';
import styles from './ArticlePreview.module.css';

const ArticlePreview = ({ id, title }) => {
  const urlToArticle = `${route.articles}/${id}`;

  return (
    <article className={styles.article}>
      <h3 className={styles.article__title} data-testid="article-preview-title">
        {title}
      </h3>
      <div className={styles['article__row-bar']}>
        <Link className={styles.article__link} to={urlToArticle}>
          Read more
        </Link>
      </div>
    </article>
  );
};

ArticlePreview.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
};

export default ArticlePreview;
