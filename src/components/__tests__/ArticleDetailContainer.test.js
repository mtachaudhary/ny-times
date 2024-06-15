import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleDetailContainer from '../ArticleDetailContainer/ArticleDetailContainer';

const article = { id: 1, title: 'Test Article', abstract: 'Abstract', url: 'http://example.com' };

test('renders article details', () => {
  render(<ArticleDetailContainer article={article} onBack={() => {}} />);
  expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
  expect(screen.getByText(/Abstract/i)).toBeInTheDocument();
  expect(screen.getByText(/Read more/i)).toHaveAttribute('href', 'http://example.com');
});
