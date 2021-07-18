/* eslint-disable no-undef */
import React from 'react';
import { render } from 'test-utils';
import Articles from 'components/Articles/Articles';

describe('Articles', () => {
  test('renders titles of articles', () => {
    const fakeArticles = [
      { id: 1, title: 'lorem1' },
      { id: 2, title: 'lorem2' },
      { id: 3, title: 'lorem3' },
    ];
    const { getAllByTestId } = render(<Articles articles={fakeArticles} />);

    const articlesTitles = getAllByTestId('article-preview-title').map(
      (title) => title.textContent,
    );
    const fakeArticlesTitles = fakeArticles.map(({ title }) => title);

    expect(articlesTitles).toEqual(fakeArticlesTitles);
  });
});
