import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';


const onSubmit = jest.fn()

describe('Search component', () => {
  it('renders search component', () => {
    render(
      <Router>
        <SearchForm/>
      </Router>,
    );
    expect(screen.getByRole('form')).toBeInTheDocument;
  });
});
describe('Search component', () => {
  beforeEach(() => {
    render(
      <Router>
        <SearchForm/>
      </Router>);
  });
  it('Search placeholder ', () => {
    expect(screen.getByPlaceholderText('What do you want to watch?')).toBeInTheDocument
  });
  it('it accepts input properly', async () => {
    const title = screen.getByPlaceholderText<HTMLInputElement>('What do you want to watch?');
    userEvent.type(title, 'Coco')
    expect(title.value).toBe('Coco');
  })
})

