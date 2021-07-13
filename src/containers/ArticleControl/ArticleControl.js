import React from "react";
import { useParams } from "react-router-dom";
import { useArticle } from "../../hooks/useArticle";
import ArticleView from "../../components/ArticleView/ArticleView";
import LoaderProvider from "../../providers/LoaderProvider";

const ArticleControl = () => {
	const { id } = useParams();
	const { article, isLoading } = useArticle({ articleId: id });

	return (
		<LoaderProvider isLoading={isLoading}>
			{article ? (
				<ArticleView title={article?.title} articleContent={article?.body} />
			) : null}
		</LoaderProvider>
	);
};

export default ArticleControl;
