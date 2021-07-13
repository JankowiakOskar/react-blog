import React from 'react';
import PropTypes from 'prop-types';

const LoaderProvider = ({ isLoading, children }) => (isLoading ? <p>Loading...</p> : children);

LoaderProvider.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};
export default LoaderProvider;
