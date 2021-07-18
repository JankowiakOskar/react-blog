import React from 'react';
import Heading from 'components/Heading/Heading';
import ArticlesContainer from 'containers/ArticlesContainer/ArticlesContainer';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.wrapper}>
    <Heading title="Blog" />
    <main className={styles['main-content']}>
      <h2 className={styles['main-content__heading']}>Our Newest Articles</h2>
      <section className={styles['main-content__section-articles']}>
        <ArticlesContainer />
      </section>
    </main>
  </div>
);

export default Home;
