// import { fetchData } from './data';
// import axios from 'axios'
// import nock from 'nock'
// import httpAdapter from 'axios/lib/adapters/http'
// import configureStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import {DataActionTypes} from '../reducers/types'

// describe('Redemption Async', ()=>{
//     jest.useFakeTimers()
//     const middlewares = [thunk]
//     const mockStore = configureStore(middlewares)
//     const host = 'http://localhost/'
//     const redeem_url = '/papi/v4/redemptions'
//     axios.defaults.host = host
//     axios.defaults.adapter = httpAdapter
//     afterEach(() => {
//         nock.cleanAll()
//     })
//     const voucherCode = ''

//     it('should handle verifyVoucherAsync', () => {
//         nock(host)
//             .get(`${redeem_url}?code=${voucherCode}`)
//             .reply(200, { redemptions: 'results_redemption' })

//         const expectedActions = [
//             { type: DataActionTypes.FETCH_DATA },
//             { type: DataActionTypes.FETCH_DATA_SUCCESS , redemptions: 'results_redemption'}
//         ]

//         const store = mockStore( { setting: { authCode: '04723' } } )
//         return store.dispatch( fetchData('voucherCode') ).then(() => {
//             jest.runAllTimers()
//             expect(store.getActions()).toEqual(expectedActions)
//         }) 
//     })
// })