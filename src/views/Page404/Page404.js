import React from 'react';
import { Link } from 'react-router-dom';
import { route } from 'routes';
import { ReactComponent as ErrorIcon } from 'assets/svgs/error-icon.svg';
import Heading from 'components/Heading/Heading';
import styles from './Page404.module.css';

const Page404 = () => (
  <div className={styles.wrapper}>
    <Heading
      title="Not Found!"
      headingIcon={<ErrorIcon />}
      subTitle="We coulnd't find data what you were looking..."
    />
    <Link className={styles.link} to={route.home}>
      Back to Home Page
    </Link>
  </div>
);

export default Page404;
