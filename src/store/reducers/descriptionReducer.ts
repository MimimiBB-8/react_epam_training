import { DescriptionAction, DescriptionActionTypes, DescriptionState } from './types'

const initialState: DescriptionState = {
  data: [],
  loading: false,
  error: null,
}

export const descriptionReducer = (
  state = initialState,
  action: DescriptionAction,
): DescriptionState => {
  switch (action.type) {
    case DescriptionActionTypes.FETCH_DESCRIPTION:
      return {
        loading: true,
        error: null,
        data: [],
      }
    case DescriptionActionTypes.FETCH_DESCRIPTION_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      }
    case DescriptionActionTypes.FETCH_DESCRIPTION_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state
  }
}
