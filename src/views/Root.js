import React from "react";
import "../assets/styles/globals.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { route } from "../routes";
import Home from "./Home/Home";

const Root = () => {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path={route.home}>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Root;
