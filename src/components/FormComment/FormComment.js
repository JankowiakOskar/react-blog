import React from 'react';
import PropTypes from 'prop-types';

const FormComment = ({ onSubmit, onChange, value }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="Type your comment..."
      value={value}
      onChange={onChange}
    />
    <button type="submit">Add comment</button>
  </form>
);

FormComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

FormComment.defaultProps = {
  value: '',
};

export default FormComment;
