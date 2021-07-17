import React from 'react';
import PropTypes from 'prop-types';
import LoaderComponent from 'components/LoaderComponent/LoaderComponent';

const LoaderProvider = ({ isLoading, children }) =>
  isLoading ? <LoaderComponent /> : children;

LoaderProvider.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default LoaderProvider;
