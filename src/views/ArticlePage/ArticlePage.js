import React from "react";
import ArticleControl from "../../containers/ArticleControl/ArticleControl";
import CommentsContainer from "../../containers/CommentsContainer/CommentsContainer";
import styles from "./ArticlePage.module.css";

const ArticlePage = () => {
	return (
		<div className={styles["wrapper"]}>
			<main className={styles["wrapper__main"]}>
				<section className={styles["article-content"]}>
					<ArticleControl />
				</section>
				<section className={styles["section-comments"]}>
					<h3 className={styles["section-comments__heading"]}>Discussion</h3>
					<CommentsContainer />
				</section>
			</main>
		</div>
	);
};

export default ArticlePage;
