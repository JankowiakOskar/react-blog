import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchArticles } from "../../actions/blogActions";

const ArticlesContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const controller = new AbortController();
		dispatch(fetchArticles(controller));
		return () => {
			controller.abort();
		};
	}, []);

	return <div>Articles Container</div>;
};

export default ArticlesContainer;
