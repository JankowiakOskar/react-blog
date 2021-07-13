import React from "react";
import PropTypes from "prop-types";

const Article = ({ title, articleContent }) => {
	return (
		<article>
			<h2>{title}</h2>
			<p>{articleContent}</p>
		</article>
	);
};

Article.propTypes = {
	title: PropTypes.string.isRequired,
	articleContent: PropTypes.string.isRequired,
};

export default Article;
