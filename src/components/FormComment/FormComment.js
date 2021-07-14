import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FormComment.module.css';
import classNames from 'classnames';

const FormComment = ({
  onSubmit,
  setComment,
  setAuthor,
  author,
  commentValue,
  error,
}) => (
  <div>
    <h3 className={styles['form-wrapper__title']}>Leave your comment</h3>
    <form onSubmit={onSubmit}>
      <div className={styles['form__input-wrapper']}>
        <label className={styles['form__label']} htmlFor="author-comment">
          Author
        </label>
        <input
          className={styles['form__input-text']}
          id="author-comment"
          type="text"
          placeholder="Type your name..."
          value={author}
          onChange={setAuthor}
        />
      </div>
      <div className={styles['form__input-wrapper']}>
        <label className={styles['form__label']} htmlFor="comment-value">
          Comment
        </label>
        <textarea
          className={classNames(
            styles['form__input-text'],
            styles['form__text-area'],
          )}
          id="comment-value"
          placeholder="Type your comment..."
          value={commentValue}
          onChange={setComment}
        />
      </div>
      <button className={styles['form__button']} type="submit">
        Add comment
      </button>
    </form>
    {error && <span>{error}!</span>}
  </div>
);

FormComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  setAuthor: PropTypes.func.isRequired,
  commentValue: PropTypes.string,
  author: PropTypes.string,
  error: PropTypes.string,
};

FormComment.defaultProps = {
  commentValue: '',
  author: '',
  error: '',
};

export default FormComment;
