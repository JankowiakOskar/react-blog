import {
  FETCH_ALL_ARTICLES_REQUEST,
  FETCH_ALL_ARTICLES_SUCCESS,
  FETCH_ALL_ARTICLES_FAILURE,
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE,
  GET_ARTICLE_COMMENTS_REQUEST,
  GET_ARTICLE_COMMENTS_SUCCESS,
  GET_ARTICLE_COMMENTS_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from './actionTypes';
import { errorHandler } from '../utilities/errors';

const BLOG_API = 'https://jsonplaceholder.typicode.com';

export const fetchArticles = (controller) => async (dispatch) => {
  dispatch({ type: FETCH_ALL_ARTICLES_REQUEST });
  try {
    const response = await fetch(`${BLOG_API}/posts`, {
      method: 'GET',
      signal: controller.signal,
    });

    const validResponse = errorHandler(response);

    const articles = await validResponse.json();

    dispatch({ type: FETCH_ALL_ARTICLES_SUCCESS, payload: articles });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_ARTICLES_FAILURE,
      payload: err.message,
    });
  }
};

export const fetchArticleById = (controller, id) => async (dispatch) => {
  dispatch({ type: FETCH_ARTICLE_REQUEST });
  try {
    const response = await fetch(`${BLOG_API}/posts/${id}`, {
      method: 'GET',
      signal: controller.signal,
    });
    const validResponse = errorHandler(response);

    const article = await validResponse.json();
    dispatch({ type: FETCH_ARTICLE_SUCCESS, payload: article });
  } catch (err) {
    dispatch({
      type: FETCH_ARTICLE_FAILURE,
      payload: err.message,
    });
  }
};

export const updateArticle = (id, newData) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_ARTICLE_REQUEST });
  const {
    articles: { data: currArticles },
  } = getState();
  const articleToUpdate = currArticles.find((article) => article.id === +id);
  const updatedArticle = { ...articleToUpdate, ...newData };
  try {
    const response = await fetch(`${BLOG_API}/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedArticle),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    const validResponse = errorHandler(response);

    const articleFromServer = await validResponse.json();
    console.log(articleFromServer);
    dispatch({
      type: UPDATE_ARTICLE_SUCCESS,
      payload: { id: articleFromServer.id, updatedArticle: articleFromServer },
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ARTICLE_FAILURE,
      payload: err.message,
    });
  }
};

export const getArticleComments =
  (controller, id) => async (dispatch, getState) => {
    const {
      comments: { data: currComments },
    } = getState();
    dispatch({ type: GET_ARTICLE_COMMENTS_REQUEST });
    try {
      const response = await fetch(`${BLOG_API}/posts/${id}/comments`, {
        method: 'GET',
        signal: controller.signal,
      });
      const validResponse = errorHandler(response);

      const articleComments = await validResponse.json();

      const updatedComments = [
        ...currComments.filter((comment) => comment.id === id),
        ...articleComments,
      ];

      dispatch({
        type: GET_ARTICLE_COMMENTS_SUCCESS,
        payload: updatedComments,
      });
    } catch (err) {
      dispatch({
        type: GET_ARTICLE_COMMENTS_FAILURE,
        payload: err.message,
      });
    }
  };

export const addCommentToArticle =
  (articleId, commentData) => async (dispatch) => {
    dispatch({ type: ADD_COMMENT_REQUEST });
    try {
      const response = await fetch(`${BLOG_API}/posts/${articleId}/comments`, {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      const validResponse = errorHandler(response);

      const createdComment = await validResponse.json();
      console.log(`Comment after add: ${createdComment}`);
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: createdComment,
      });
    } catch (err) {
      dispatch({
        type: ADD_COMMENT_FAILURE,
        payload: err.message,
      });
    }
  };
