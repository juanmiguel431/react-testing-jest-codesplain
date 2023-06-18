import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

test('Shows a link to the github homepage for this repository', async () => {
  const repositoryMock = {
    html_url: 'https://github.com/facebook/react',
    full_name: 'facebook/react', language: 'Javascript', description: 'A Js library', owner: 'Facebook', name: 'react',
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repositoryMock}/>
    </MemoryRouter>
  );

  await screen.findByRole('img', { name: 'Javascript' });

  const link = screen.getByRole('link', { name: /github repository/i });
  expect(link).toHaveProperty('href', repositoryMock.html_url);
});
