import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
import { ArticleProvider } from '../../context/ArticleContext';

const article = { id: 1, title: 'Test Article', abstract: 'Abstract', url: 'http://example.com' };

test('renders message when no article is selected', () => {
  render(
    <ArticleProvider>
      <ArticleDetail article={null} onBack={() => {}} />
    </ArticleProvider>
  );
  expect(screen.getByText(/Select an article to see details/i)).toBeInTheDocument();
});

test('renders article details', () => {
  render(
    <ArticleProvider>
      <ArticleDetail article={article} onBack={() => {}} />
    </ArticleProvider>
  );

  expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
  expect(screen.getByText(/Abstract/i)).toBeInTheDocument();
  expect(screen.getByText(/Read more/i)).toHaveAttribute('href', 'http://example.com');
});

test('calls onBack when back button is clicked', () => {
  const onBack = jest.fn();

  render(
    <ArticleProvider>
      <ArticleDetail article={article} onBack={onBack} />
    </ArticleProvider>
  );

  fireEvent.click(screen.getByText(/Back/i));
  expect(onBack).toHaveBeenCalled();
});
