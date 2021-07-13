import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleView.module.css";
const ArticleView = ({ title, articleContent }) => {
	return (
		<article>
			<h2 className={styles["article__title"]}>{title}</h2>
			<p className={styles["article__content"]}>{articleContent}</p>
		</article>
	);
};

ArticleView.propTypes = {
	title: PropTypes.string.isRequired,
	articleContent: PropTypes.string.isRequired,
};

export default ArticleView;
