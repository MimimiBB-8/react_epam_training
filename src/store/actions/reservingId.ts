import { ReservingIdActionTypes } from '../reducers/types'


export const receivingId = (param: number) => {
  return {
    type: ReservingIdActionTypes.RESERVING_ID,
    payload: param,
  }
}
