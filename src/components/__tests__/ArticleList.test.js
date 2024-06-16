import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleList from '../ArticleList/ArticleList';
import { ArticleProvider } from '../../context/ArticleContext';

const articles = [{ id: 1, title: 'Test Article' }];

test('renders article titles', () => {
  render(
    <ArticleProvider>
      <ArticleList articles={articles} onSelectArticle={() => {}} />
    </ArticleProvider>
  );
  expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
});

test('calls onSelectArticle when article is clicked', () => {
  const onSelectArticle = jest.fn();
  render(
    <ArticleProvider>
      <ArticleList articles={articles} onSelectArticle={onSelectArticle} />
    </ArticleProvider>
  );

  fireEvent.click(screen.getByText(/Test Article/i));
  expect(onSelectArticle).toHaveBeenCalledWith(articles[0]);
});
