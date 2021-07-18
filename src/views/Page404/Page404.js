import React from 'react';
import { Link } from 'react-router-dom';
import { route } from 'routes';
import Heading from 'components/Heading/Heading';
import styles from './Page404.module.css';

const Page404 = () => (
  <div className={styles.wrapper}>
    <Heading
      title="Not Found!"
      subTitle="We coulnd't find data what you were looking..."
    />
    <Link className={styles.link} to={route.home}>
      Back to Home Page
    </Link>
  </div>
);

export default Page404;
