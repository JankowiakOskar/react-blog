import {
	FETCH_ARTICLES_REQUEST,
	FETCH_ARTICLES_SUCCESS,
	FETCH_ARTICLES_FAILURE,
} from "./actionTypes";
import { errorHandler } from "../utilities/errors";

const BLOG_API = "https://jsonplaceholder.typicode.com";

export const fetchArticles = (controller) => {
	return async (dispatch) => {
		dispatch({ type: FETCH_ARTICLES_REQUEST });
		try {
			const response = await fetch(`${BLOG_API}/posts`, {
				method: "GET",
				signal: controller.signal,
			});

			const validResponse = errorHandler(response);

			const articles = await validResponse.json();

			dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: articles });
		} catch (err) {
			dispatch({
				type: FETCH_ARTICLES_FAILURE,
				payload: err.message,
			});
		}
	};
};
