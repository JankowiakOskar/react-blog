/* eslint-disable no-undef */
import React from 'react';
import { render } from 'test-utils';
import ArticlePreview from 'components/ArticlePreview/ArticlePreview';

describe('ArticlePreview', () => {
  test('Display article title propertly', () => {
    const exampleTitle = 'New Article';

    const { getByText } = render(
      <ArticlePreview id={1} title={exampleTitle} />,
    );

    const articleTitle = getByText(exampleTitle);

    expect(articleTitle).toHaveTextContent(exampleTitle);
  });
});
