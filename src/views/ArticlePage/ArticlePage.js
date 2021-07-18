import React from 'react';
import ArticleControl from 'containers/ArticleControl/ArticleControl';
import CommentsContainer from 'containers/CommentsContainer/CommentsContainer';
import FormCommentControl from 'containers/FormCommentControl/FormCommentControl';
import styles from './ArticlePage.module.css';

const ArticlePage = () => (
  <div className={styles.wrapper}>
    <main className={styles.wrapper__main}>
      <section className={styles['article-content']}>
        <ArticleControl />
      </section>
      <section className={styles['section-comments']}>
        <h3 className={styles['section-comments__heading']}>Discussion</h3>
        <CommentsContainer />
        <FormCommentControl />
      </section>
    </main>
  </div>
);

export default ArticlePage;
