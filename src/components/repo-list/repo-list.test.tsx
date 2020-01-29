import React from 'react';
import { render } from '@testing-library/react';
import { RepoList } from './repo-list';

test('renders learn react link', () => {
  const { getByText } = render(<RepoList />);
  const linkElement = getByText(/Search for repos/i);
  expect(linkElement).toBeInTheDocument();
});
