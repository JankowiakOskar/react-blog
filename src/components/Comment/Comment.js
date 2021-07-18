import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comment.module.css';

const Comment = ({ author, content }) => (
  <div className={styles.comment}>
    <h4 className={styles.comment__author}>{author}</h4>
    <p className={styles.comment__content}>{content}</p>
  </div>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Comment;
