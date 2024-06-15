import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleList from '../ArticleList/ArticleList';

const articles = [{ id: 1, title: 'Test Article' }];

test('renders article titles', () => {
  render(<ArticleList articles={articles} onSelectArticle={() => {}} />);
  expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
});

test('calls onSelectArticle when article is clicked', () => {
  const onSelectArticle = jest.fn();
  render(<ArticleList articles={articles} onSelectArticle={onSelectArticle} />);

  fireEvent.click(screen.getByText(/Test Article/i));
  expect(onSelectArticle).toHaveBeenCalledWith(articles[0]);
});
