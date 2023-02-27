import { DataAction, DataActionTypes } from '../redusers/types'
import { Dispatch } from 'redux'

export const fetchData = (param: any) => {
  return async (dispatch: Dispatch<DataAction>) => {
    try {
      dispatch({ type: DataActionTypes.FETCH_DATA })
      const url = `http://localhost:4000/movies?limit=9?limit=9${param.parametr}`
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      dispatch({ type: DataActionTypes.FETCH_DATA_SUCCESS, payload: json.data })
    } catch (e) {
      dispatch({ type: DataActionTypes.FETCH_DATA_ERROR, payload: 'ERROR' })
    }
  }
}
