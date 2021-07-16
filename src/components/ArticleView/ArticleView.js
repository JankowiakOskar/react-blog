import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as HeartIcon } from 'assets/svgs/heart-icon.svg';
import styles from './ArticleView.module.css';

const ArticleView = ({ title, articleContent, isLiked, handleUpdate }) => (
  <article className={styles.article}>
    <h2 className={styles.article__title}>{title}</h2>
    <p className={styles.article__content}>{articleContent}</p>
    <div className={styles['article__inner-wrapper']}>
      <p className={styles['article__content--small']}>
        Do you like above article?
      </p>
      <HeartIcon
        className={classnames(styles['article__heart-icon'], {
          [styles['article__heart-icon--liked']]: isLiked,
        })}
        onClick={() => handleUpdate({ isLiked: !isLiked })}
      />
    </div>
  </article>
);

ArticleView.propTypes = {
  title: PropTypes.string.isRequired,
  articleContent: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default ArticleView;
