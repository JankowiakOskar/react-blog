import React from "react";
import PropTypes from "prop-types";

const Comment = ({ author, content }) => {
	return (
		<div>
			<h4>{author}</h4>
			<p>{content}</p>
		</div>
	);
};

Comment.propTypes = {
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

export default Comment;
