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
  CLEAR_ARTICLE_ERROR,
  CLEAR_COMMENT_ERROR,
  GET_ARTICLE_COMMENTS_REQUEST,
  GET_ARTICLE_COMMENTS_SUCCESS,
  GET_ARTICLE_COMMENTS_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from 'actions/actionTypes';

export const initialState = {
  articles: {
    data: [],
    areLoading: false,
    isArticleUpdating: false,
    error: { message: '' },
  },
  comments: {
    data: [],
    areLoading: false,
    isCommentSubmitting: false,
    error: { message: '' },
  },
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ARTICLES_REQUEST:
      return {
        ...state,
        articles: {
          ...state.articles,
          areLoading: !state.articles.areLoading,
        },
      };
    case FETCH_ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: {
          ...state.articles,
          data: [...action.payload],
          areLoading: !state.articles.areLoading,
        },
      };
    case FETCH_ALL_ARTICLES_FAILURE:
      return {
        ...state,
        articles: {
          ...state.articles,
          areLoading: !state.articles.areLoading,
          error: { message: action.payload },
        },
      };
    case FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        articles: {
          ...state.articles,
          areLoading: !state.articles.areLoading,
        },
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: {
          ...state.articles,
          data: [...state.articles.data, action.payload],
          areLoading: !state.articles.areLoading,
        },
      };
    case FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        articles: {
          ...state.articles,
          areLoading: !state.articles.areLoading,
          error: { message: action.payload },
        },
      };
    case UPDATE_ARTICLE_REQUEST: {
      return {
        ...state,
        articles: {
          ...state.articles,
          isArticleUpdating: !state.articles.isArticleUpdating,
        },
      };
    }
    case UPDATE_ARTICLE_SUCCESS: {
      const { id, updatedArticle } = action.payload;
      return {
        ...state,
        articles: {
          ...state.articles,
          data: [
            ...state.articles.data.filter((article) => article.id !== id),
            updatedArticle,
          ],
          isArticleUpdating: !state.articles.isArticleUpdating,
        },
      };
    }
    case UPDATE_ARTICLE_FAILURE: {
      return {
        ...state,
        articles: {
          ...state.articles,
          error: { message: action.payload },
          isArticleUpdating: !state.articles.isArticleUpdating,
        },
      };
    }
    case CLEAR_ARTICLE_ERROR: {
      return {
        ...state,
        articles: {
          ...state.articles,
          error: { message: '' },
        },
      };
    }
    case GET_ARTICLE_COMMENTS_REQUEST:
      return {
        ...state,
        comments: {
          ...state.comments,
          areLoading: !state.comments.areLoading,
        },
      };
    case GET_ARTICLE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          data: action.payload,
          areLoading: !state.comments.areLoading,
        },
      };
    case GET_ARTICLE_COMMENTS_FAILURE:
      return {
        ...state,
        comments: {
          ...state.comments,
          areLoading: !state.comments.areLoading,
          error: { message: action.payload },
        },
      };
    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        comments: {
          ...state.comments,
          isCommentSubmitting: !state.comments.isCommentSubmitting,
        },
      };
    }
    case ADD_COMMENT_SUCCESS: {
      return {
        ...state,
        comments: {
          ...state.comments,
          data: [...state.comments.data, action.payload],
          isCommentSubmitting: !state.comments.isCommentSubmitting,
        },
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        comments: {
          ...state.comments,
          error: { message: action.payload },
          isCommentSubmitting: !state.comments.isCommentSubmitting,
        },
      };
    }
    case CLEAR_COMMENT_ERROR: {
      return {
        ...state,
        comments: {
          ...state.comments,
          error: { message: '' },
        },
      };
    }
    default:
      return state;
  }
};
