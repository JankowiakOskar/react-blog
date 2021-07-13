import React from "react";
import PropTypes from "prop-types";
import styles from "./Heading.module.css";

const Heading = ({ title, subTitle = "" }) => {
	return (
		<header className={styles["header"]}>
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