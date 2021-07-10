import {
	FETCH_ARTICLES_REQUEST,
	FETCH_ARTICLES_SUCCESS,
	FETCH_ARTICLES_FAILURE,
} from "../actions/actionTypes";

export const initialState = {
	articles: {
		data: [],
		areLoading: false,
		error: {
			message: "",
		},
	},
	comments: {
		data: [],
		areLoading: false,
		error: {
			message: "",
		},
	},
};

export const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ARTICLES_REQUEST:
			return {
				...state,
				articles: {
					...state.articles,
					areLoading: true,
				},
			};
		case FETCH_ARTICLES_SUCCESS:
			return {
				...state,
				articles: {
					...state.articles,
					data: [...state.articles.data, ...action.payload],
					areLoading: false,
				},
			};
		case FETCH_ARTICLES_FAILURE:
			return {
				...state,
				articles: {
					...state.articles,
					areLoading: false,
					error: { message: action.payload },
				},
			};
		default:
			return state;
	}
};
