import { DescriptionAction, DescriptionActionTypes } from '../redusers/types'
import { Dispatch } from 'redux'

export const fetchDescription = (param: any) => {
  return async (dispatch: Dispatch<DescriptionAction>) => {
    try {
      dispatch({ type: DescriptionActionTypes.FETCH_DESCRIPTION })
      const url = `http://localhost:4000/movies/${param}`
      const apiResponse = await fetch(url)
      const json = await apiResponse.json()
      dispatch({ type: DescriptionActionTypes.FETCH_DESCRIPTION_SUCCESS, payload: json })
    } catch (e) {
      dispatch({ type: DescriptionActionTypes.FETCH_DESCRIPTION_ERROR, payload: 'ERROR' })
    }
  }
}
