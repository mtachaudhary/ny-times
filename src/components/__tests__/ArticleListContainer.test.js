import React, { act } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ArticleListContainer from '../ArticleListContainer/ArticleListContainer';

// Mock fetch
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ results: [{ id: 1, title: 'Test Article' }] }),
    })
  );
});

afterAll(() => {
  global.fetch.mockClear();
});

test('renders loading state initially', () => {
  render(<ArticleListContainer />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test('renders articles after fetching', async () => {
  await act(async () => {
    render(<ArticleListContainer onSelectArticle={() => {}} />);
  });

  await waitFor(() => {
    expect(screen.getByText(/Test Article/i)).toBeInTheDocument();
  });
});
