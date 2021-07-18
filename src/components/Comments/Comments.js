import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const Comments = ({ comments }) => {
  if (!comments.length || !comments) {
    return <p>No comments</p>;
  }
  return (
    <>
      {comments.map(({ id, email, name, body }, index) => (
        <Comment key={`${id + index}`} author={email || name} content={body} />
      ))}
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      email: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
};

Comments.defaultProps = { comments: [] };

export default Comments;
