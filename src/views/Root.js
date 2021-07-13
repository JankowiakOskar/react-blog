import React from 'react';
import '../assets/styles/globals.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { route } from '../routes';
import Home from './Home/Home';
import ArticlePage from './ArticlePage/ArticlePage';

const Root = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path={route.home} component={Home} />
        <Route path={route.article} component={ArticlePage} />
      </Switch>
    </div>
  </Router>
);

export default Root;
