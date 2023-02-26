import { ReservingIdActionTypes } from '../redusers/types'


export const receivingId = (param: number) => {
  console.log(param)
  return {
    type: ReservingIdActionTypes.RESERVING_ID,
    payload: param,
  }
}
