import { screen, render, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

// const MockComponent = () => {
//   return <h1>Mocked Component</h1>;
// };
//
// jest.mock('../tree/FileIcon.js', () => {
//   return () => <MockComponent />;
// });

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

  // await screen.findByRole('img', { name: 'Javascript' });

  await act(async () => {
    await pause();
  });

  // screen.debug();
  // await pause();
  // screen.debug();

  // const link = screen.getByText(new RegExp(repositoryMock.html_url, 'i'));
  //
  // expect(link).toBeInTheDocument();
});

const pause = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 100);
  });
};
