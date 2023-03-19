import { fetchData } from './data';
import axios from 'axios'
import nock from 'nock'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { DataActionTypes } from '../reducers/types'

export const MOVIE = {
    'id': 337167,
    'title': 'Fifty Shades Freed',
    'tagline': 'Don\'t miss the climax',
    'vote_average': 6.1,
    'vote_count': 1195,
    'release_date': '2018-02-07',
    'poster_path': 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    'overview': 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    'budget': 55000000,
    'revenue': 136906000,
    'genres': [
        'Drama',
        'Romance'
    ],
    'runtime': 106
}

jest.mock('axios');

describe('Redemption Async', () => {
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares)

    afterEach(() => {
        nock.cleanAll()
    })

    it('should fire successful action', async () => {
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { 'data': MOVIE } }));
        const expectedActions = [
            { type: DataActionTypes.FETCH_DATA_SUCCESS, payload: MOVIE },
        ];
        const store = mockStore({});
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await store.dispatch(fetchData('&filter=comedy'));
        expect(await store.getActions()).toEqual(expectedActions)
    })


    it('should fire failure action', async () => {
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: null }));
        const expectedActions = [
            { type: DataActionTypes.FETCH_DATA_ERROR, payload: 'Cannot read properties of null (reading data)' },
        ];
        const store = mockStore({});
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            await store.dispatch(fetchData(MOVIE.id));
        } finally {
            expect(await store.getActions()).toEqual(expectedActions)
        }
    })

    describe('should fire an action to fetch movies', () => {
        it('should fire successful action', async () => {
            const mockedAxios = axios as jest.Mocked<typeof axios>;
            mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { 'data': [MOVIE] } }));
            const expectedActions = [
                { type: DataActionTypes.FETCH_DATA_SUCCESS, payload: [MOVIE] },
            ];

            const store = mockStore({});
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            await store.dispatch(fetchData(''));
            expect(await store.getActions()).toEqual(expectedActions)
        })
        it('should fire failure action', async () => {
            const mockedAxios = axios as jest.Mocked<typeof axios>;
            mockedAxios.get.mockImplementationOnce(() => Promise.reject({ message: 'ERROR' }));
            const expectedActions = [
                { type: DataActionTypes.FETCH_DATA_ERROR, payload: 'ERROR' },
            ];
            const store = mockStore({

            });
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                await store.dispatch(fetchData(''));
            } finally {
                expect(await store.getActions()).toEqual(expectedActions)
            }
        })
    })

})