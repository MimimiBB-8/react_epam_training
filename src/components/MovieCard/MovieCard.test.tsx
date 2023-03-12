import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import MovieCard from "./MovieCard";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('Render MovieCard', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <Router>
                    <MovieCard keyID={''} title={''} year={''} genres={''} urlImg={''} />
                </Router>
            </Provider>
        );

        expect(screen.getByRole('img')).toBeInTheDocument;
        expect(screen.queryByRole('h4')).toBeInTheDocument;
        expect(screen.queryByRole('.movie_year')).toBeInTheDocument;
        expect(screen.queryByRole('.movie_genre')).toBeInTheDocument;
    });
    it('Render MovieCard with param', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <Router>
                    <MovieCard keyID={'337167'} title={'Fifty Shades Freed'} year={'2018-02-07'} genres={'Drama,Romance'} urlImg={'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'} />
                </Router>
            </Provider>
        );

        expect(screen.queryByRole('img')).toHaveAttribute;
        expect(screen.queryByTitle('Fifty Shades Freed')).toBeInTheDocument
        expect(screen.queryByTitle('2018')).toBeInTheDocument;
        expect(screen.queryByTitle('Drama,Romance')).toBeInTheDocument;
    });
});
