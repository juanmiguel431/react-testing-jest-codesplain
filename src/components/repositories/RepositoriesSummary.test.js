import { screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('Displays the primary language of the repository', async () => {
  const respository = {
    language: 'Javascript',
    stargazers_count: 1, open_issues: 1, forks: 1
  }
  render(<RepositoriesSummary repository={respository} />);

  const language = screen.getByText(respository.language);

  expect(language).toBeInTheDocument();
});
