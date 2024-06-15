import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleDetail from '../ArticleDetail/ArticleDetail';

const article = { id: 1, title: 'Test Article', abstract: 'Abstract', url: 'http://example.com' };

test('renders message when no article is selected', () => {
  render(<ArticleDetail article={null} onBack={() => {}} />);
  expect(screen.getByText(/Select an article to see details/i)).toBeInTheDocument();
});

test('renders article details', () => {
  render(<ArticleDetail article={article} onBack={() => {}} />);
  expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
  expect(screen.getByText(/Abstract/i)).toBeInTheDocument();
  expect(screen.getByText(/Read more/i)).toHaveAttribute('href', 'http://example.com');
});

test('calls onBack when back button is clicked', () => {
  const onBack = jest.fn();
  render(<ArticleDetail article={article} onBack={onBack} />);

  fireEvent.click(screen.getByText(/Back/i));
  expect(onBack).toHaveBeenCalled();
});
