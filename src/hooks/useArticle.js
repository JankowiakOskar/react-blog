import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleById } from "../actions/blogActions";

export const useArticle = ({ articleId }) => {
	const dispatch = useDispatch();
	const { data: articlesData, areFetching } = useSelector(
		(state) => state.articles,
	);

	const searchedArticle = articlesData.find(
		(article) => String(article.id) === String(articleId),
	);

	useEffect(() => {
		if (!searchedArticle) {
			const controller = new AbortController();

			dispatch(fetchArticleById(controller, articleId));

			return () => {
				controller.abort();
			};
		}
	}, [searchedArticle]);

	return {
		article: searchedArticle,
		isLoading: areFetching,
	};
};
