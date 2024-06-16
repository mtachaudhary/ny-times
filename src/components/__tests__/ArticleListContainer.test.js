import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import ArticleListContainer from '../ArticleListContainer/ArticleListContainer';
import { ArticleProvider } from '../../context/ArticleContext';

// Mock fetch
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ results: [{ id: 1, title: 'Test Article' }] }),
    })
  );
});

afterEach(() => {
  global.fetch.mockClear();
});

test('renders loading state initially', () => {
  render(
    <ArticleProvider>
      <ArticleListContainer />
    </ArticleProvider>
  );
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test('renders articles after fetching', async () => {
  await act(async () => {
    render(
      <ArticleProvider>
        <ArticleListContainer />
      </ArticleProvider>
    );
  });

  await waitFor(() => {
    expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
  });
});
