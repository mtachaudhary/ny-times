import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleDetailContainer from '../ArticleDetailContainer/ArticleDetailContainer';
import { ArticleContext, ArticleProvider } from '../../context/ArticleContext';

// Mock Article Context
const mockArticle = {
  title: 'Test Article',
  abstract: 'Abstract',
  url: 'http://example.com',
};

const MockArticleProvider = ({ children }) => (
  <ArticleContext.Provider value={{ selectedArticle: mockArticle, setSelectedArticle: jest.fn() }}>
    {children}
  </ArticleContext.Provider>
);

test('renders article details container', () => {
  render(
    <MockArticleProvider>
      <ArticleDetailContainer />
    </MockArticleProvider>
  );

  expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
  expect(screen.getByText(/Abstract/i)).toBeInTheDocument();
  expect(screen.getByText(/Read more/i)).toHaveAttribute('href', 'http://example.com');
});
