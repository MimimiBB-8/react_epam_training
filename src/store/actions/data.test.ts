import { fetchData } from './data';
import axios from 'axios'
import nock from 'nock'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {DataActionTypes} from '../reducers/types'
import { any } from 'cypress/types/bluebird';

describe('Redemption Async', ()=>{
    jest.useFakeTimers()
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares)
    const host = 'http://localhost:4000/'
    const redeem_url = 'movies?limit=9?'
    axios.defaults.adapter = require('axios/lib/adapters/http');
    afterEach(() => {
        nock.cleanAll()
    })
    

    // it('should handle verifyVoucherAsync', async () => {
    //     nock(host)
    //         .get(`${redeem_url}'filter=comedy`)
    //         .reply(200, { redemptions: 'results_redemption' })

    //     const expectedActions = [
    //         { type: DataActionTypes.FETCH_DATA },
    //         { type: DataActionTypes.FETCH_DATA_SUCCESS , redemptions: 'results_redemption'}
    //     ]

    //     const store = mockStore( { setting: { authCode: '04723' } } )

    //     await store.dispatch(fetchData('filter=comedy'))

    //     return store.dispatch().then(() => {
    //         jest.runAllTimers()
    //         expect(store.getActions()).toEqual(expectedActions)
    //     }) 
    // })
})