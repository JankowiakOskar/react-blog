import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Loader } from 'assets/svgs/spinner.svg';
import styles from './Loader.module.css';

const LoaderComponent = ({
  loadingmessage = `Wait, we're loading data...`,
}) => (
  <div className={styles.loader}>
    <Loader className={styles.loader__spinner} />
    <span className={styles.loader__message}>{loadingmessage}</span>
  </div>
);

LoaderComponent.propTypes = {
  loadingmessage: PropTypes.string.isRequired,
};

export default LoaderComponent;
