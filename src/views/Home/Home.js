import React from "react";
import Heading from "../../components/Heading/Heading";
import ArticlesContainer from "../../containers/ArticlesContainer/ArticlesContainer";

const Home = () => {
	return (
		<div>
			<Heading title="Our newest articles" />
			<ArticlesContainer />
		</div>
	);
};

export default Home;
