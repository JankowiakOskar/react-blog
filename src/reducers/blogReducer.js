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
} from '../actions/actionTypes';

export const initialState = {
  articles: {
    data: [],
    areLoading: false,
    error: {
      message: '',
    },
  },
  comments: {
    data: [],
    areLoading: false,
    error: {
      message: '',
    },
  },
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ARTICLES_REQUEST:
      return {
        ...state,
        articles: {
          ...state.articles,
          areLoading: true,
        },
      };
    case FETCH_ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: {
          ...state.articles,
          data: [...action.payload],
          areLoading: false,
        },
      };
    case FETCH_ALL_ARTICLES_FAILURE:
      return {
        ...state,
        articles: {
          ...state.articles,
          areLoading: false,
          error: { message: action.payload },
        },
      };
    case FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        articles: {
          ...state.articles,
          areLoading: true,
        },
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: {
          ...state.articles,
          data: [...state.articles.data, action.payload],
          areLoading: false,
        },
      };
    case FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        articles: {
          ...state.articles,
          areLoading: false,
          error: { message: action.payload },
        },
      };
    case GET_ARTICLE_COMMENTS_REQUEST:
      return {
        ...state,
        comments: {
          ...state.comments,
          areLoading: true,
        },
      };
    case GET_ARTICLE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          data: action.payload,
          areLoading: false,
        },
      };
    case GET_ARTICLE_COMMENTS_FAILURE:
      return {
        ...state,
        comments: {
          ...state.comments,
          areLoading: false,
          error: { message: action.payload },
        },
      };
    default:
      return state;
  }
};
