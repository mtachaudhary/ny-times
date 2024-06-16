import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleDetailContainer from '../ArticleDetailContainer/ArticleDetailContainer';
import { ArticleProvider } from '../../context/ArticleContext';

const article = { id: 1, title: 'Test Article', abstract: 'Abstract', url: 'http://example.com' };

test('renders article details container', () => {
  render(
    <ArticleProvider value={{ selectedArticle: article }}>
      <ArticleDetailContainer />
    </ArticleProvider>
  );

  expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
  expect(screen.getByText(/Abstract/i)).toBeInTheDocument();
  expect(screen.getByText(/Read more/i)).toHaveAttribute('href', 'http://example.com');
});
