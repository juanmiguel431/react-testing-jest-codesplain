import { screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

const mockRepositoryProp = {
  stargazers_count: 1,
  open_issues: 30,
  forks: 5,
  language: 'JavaScript',
};

const mockRepositoryWithoutLanguageProp = {
  stargazers_count: 1,
  open_issues: 30,
  forks: 5,
  language: null,
};

describe('RepositorySummary.js', () => {
  it('should show correct information of the repository', () => {
    render(<RepositoriesSummary repository={mockRepositoryProp} />);

    for (const key in mockRepositoryProp) {
      const value = mockRepositoryProp[key];
      const summaryText = screen.getByText(new RegExp(value));
      expect(summaryText).toBeInTheDocument();
    }
  });

  it('should show "No languages" when language data is not present', () => {
    render(
      <RepositoriesSummary repository={mockRepositoryWithoutLanguageProp} />
    );

    const languageText = screen.getByText(/no languages/i);
    expect(languageText).toBeInTheDocument();
  });
});
