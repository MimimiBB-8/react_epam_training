import { SortAction, SortActionTypes, SortState } from './types'

const initialState: SortState = {
  parametr: '',
}

export const sortReducer = (state = initialState, action: SortAction): SortState => {
  switch (action.type) {
    case SortActionTypes.FILTER_BY_GENRE:
      return {
        parametr: action.payload,
      }
    case SortActionTypes.SORT_BY:
      return {
        parametr: action.payload,
      }
    default:
      return state
  }
}
