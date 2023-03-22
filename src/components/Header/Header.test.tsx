import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';


describe('component header', () => {
    it('render header component', () => {
        render(
            <Router>
                <Header />
            </Router>,
        );
        expect(screen.queryByRole('header')).toBeInTheDocument;
        expect(screen.queryByDisplayValue('netflixroulette')).toBeInTheDocument;
        expect(screen.queryByTitle('+ ADD MOVIE')).toBeInTheDocument;
        expect(screen.queryByText('FIND YOUR MOVIE')).toBeInTheDocument;
        expect(screen.queryByRole('form')).toBeInTheDocument;
    });
    it('snapshot header', () => {

        const { asFragment } = render(
            <Router>
                <Header />
            </Router>,
        );
        expect(asFragment()).toMatchSnapshot()
    })
})