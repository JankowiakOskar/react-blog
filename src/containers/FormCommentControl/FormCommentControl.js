import React, { useState } from 'react';
import FormComment from 'components/FormComment/FormComment';

const FormCommentControl = () => {
  const [commentText, setCommentText] = useState('');

  const handleTypingComment = (val) => setCommentText(val);

  return <FormComment value={commentText} onChange={handleTypingComment} />;
};

export default FormCommentControl;
