import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const Comments = ({ comments }) => (
  <>
    {comments.map(({ id, email, body }) => (
      <Comment key={`${id}`} author={email} content={body} />
    ))}
  </>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      email: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
};

Comments.defaultProps = {
  comments: [],
};

export default Comments;
