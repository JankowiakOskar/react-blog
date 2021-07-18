import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { blogReducer } from './reducers/blogReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  blogReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
