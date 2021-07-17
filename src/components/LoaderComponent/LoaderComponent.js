import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';
import { ReactComponent as Loader } from 'assets/svgs/spinner.svg';

const LoaderComponent = ({
  loadingmessage = `Wait, we're loading data...`,
}) => (
  <div className={styles.loader}>
    <Loader className={styles.loader__spinner} />
    <span className={styles.loader__message}>{loadingmessage}</span>
  </div>
);

Loader.propTypes = {
  loadingmessage: PropTypes.string,
};

export default LoaderComponent;
