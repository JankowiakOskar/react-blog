import React, { useReducer, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCommentToArticle } from 'actions/blogActions';
import FormComment from 'components/FormComment/FormComment';

const initialState = {
  author: '',
  commentText: '',
  errorMsg: '',
};

const commentReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COMMENT_VALUE':
      return {
        ...state,
        commentText: action.payload,
      };
    case 'SET_COMMENT_AUTHOR':
      return {
        ...state,
        author: action.payload,
      };
    case 'SET_COMMENT_ERROR':
      return {
        ...state,
        errorMsg: action.payload,
      };
    case 'CLEAR_ERROR': {
      return {
        ...state,
        errorMsg: '',
      };
    }
    case 'RESET':
      return initialState;
    default:
      throw new Error(`Unhandled type of action: ${action.type}`);
  }
};

const FormCommentControl = () => {
  const { id: articleId } = useParams();
  const dispatch = useDispatch();
  const { error: serverError, isCommentSubmitting } = useSelector(
    (state) => state.comments,
  );
  const [state, dispatchComment] = useReducer(commentReducer, initialState);

  const { author, commentText, errorMsg } = state;
  console.log(author);
  const isDisabledSubmit =
    errorMsg.length || serverError.message.length || isCommentSubmitting;

  const handleTypingComment = (e) => {
    const { value } = e.target;
    dispatchComment({ type: 'SET_COMMENT_VALUE', payload: value });
  };

  const handleSettingAuthor = (e) => {
    const { value } = e.target;
    dispatchComment({ type: 'SET_COMMENT_AUTHOR', payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !commentText) {
      dispatchComment({
        type: 'SET_COMMENT_ERROR',
        payload: 'All fields are required',
      });
    } else {
      dispatch(
        addCommentToArticle(articleId, { name: author, body: commentText }),
      );
      dispatchComment({ type: 'RESET' });
    }
  };

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => dispatchComment({ type: 'CLEAR_ERROR' }), 1500);
    }
  }, [errorMsg, serverError.message]);

  return (
    <FormComment
      commentValue={commentText}
      author={author}
      setComment={handleTypingComment}
      setAuthor={handleSettingAuthor}
      onSubmit={handleSubmit}
      error={errorMsg || serverError.message}
      isDisabledSubmit={isDisabledSubmit}
    />
  );
};

export default FormCommentControl;
