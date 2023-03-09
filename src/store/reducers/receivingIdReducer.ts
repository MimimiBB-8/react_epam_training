import { ReservingIdAction, ReservingIdActionTypes, ReservingIdState } from './types'

export const initialState: ReservingIdState = {
  itemId: 0,
}

export const receivingIdReducer = (
  state = initialState,
  action: ReservingIdAction,
): ReservingIdState => {
  switch (action.type) {
    case ReservingIdActionTypes.RESERVING_ID:
      return {
        itemId: action.payload,
      }
    default:
      return state
  }
}
