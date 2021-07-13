import React from "react";
import ArticleControl from "../../containers/ArticleControl/ArticleControl";
import CommentsContainer from "../../containers/CommentsContainer/CommentsContainer";

const ArticlePage = () => {
	return (
		<div>
			<main>
				<ArticleControl />
				<CommentsContainer />
			</main>
		</div>
	);
};

export default ArticlePage;
