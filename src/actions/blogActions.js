import {
  FETCH_ALL_ARTICLES_REQUEST,
  FETCH_ALL_ARTICLES_SUCCESS,
  FETCH_ALL_ARTICLES_FAILURE,
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  GET_ARTICLE_COMMENTS_REQUEST,
  GET_ARTICLE_COMMENTS_SUCCESS,
  GET_ARTICLE_COMMENTS_FAILURE,
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

export const getArticleComments = (controller, id) => async (dispatch, getState) => {
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
