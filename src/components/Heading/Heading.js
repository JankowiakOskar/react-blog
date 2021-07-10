import React from "react";
import PropTypes from "prop-types";

const Heading = ({ title, subTitle = "" }) => {
	return (
		<header>
			<h1>{title}</h1>
			{subTitle && <p>{subTitle}</p>}
		</header>
	);
};

Heading.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
};

export default Heading;
