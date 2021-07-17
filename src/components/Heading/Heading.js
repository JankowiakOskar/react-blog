import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.css';

const Heading = ({ title, subTitle }) => (
  <header className={styles.header}>
    <h1>{title}</h1>
    {subTitle && <h3 className={styles.header__subtitle}>{subTitle}</h3>}
  </header>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

Heading.defaultProps = {
  subTitle: '',
};

export default Heading;
