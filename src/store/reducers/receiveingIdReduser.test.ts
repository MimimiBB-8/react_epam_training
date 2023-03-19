import { ReservingIdActionTypes } from '../reducers/types'
import {receivingIdReducer, initialState} from './receivingIdReducer'

describe('Receiving Id Reducer', () => {
  const state: typeof initialState ={
    itemId: 313369
  }
  it('should handle RESERVING_ID', () => {
    expect(receivingIdReducer(undefined, { 
        payload : 313369,
        type:  ReservingIdActionTypes.RESERVING_ID })).toEqual({'itemId': 313369});
  });
  
  it('empty RESERVING_ID', () => {
    // @ts-ignore
    expect(receivingIdReducer(undefined, { 
        })).toEqual({'itemId': 0});
  });
});