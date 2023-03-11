import { DescriptionAction, DescriptionActionTypes } from '../reducers/types'
import { Dispatch } from 'redux'
import axios from 'axios';

export const fetchDescription = (param: string) => {
  return (dispatch: any) =>  {
    dispatch({ type: DescriptionActionTypes.FETCH_DESCRIPTION });
    return axios.get(`http://localhost:4000/movies/${param}`)
      .then((response) => {
        const data = response.data;
        dispatch({ type: DescriptionActionTypes.FETCH_DESCRIPTION_SUCCESS, payload: data });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({ type: DescriptionActionTypes.FETCH_DESCRIPTION_ERROR, payload: errorMsg });
      })  
  }
  // return async (dispatch: Dispatch<DescriptionAction>) => {
  //   try {
  //     dispatch({ type: DescriptionActionTypes.FETCH_DESCRIPTION })
  //     const url = `http://localhost:4000/movies/${param}`
  //     const apiResponse = await fetch(url)
  //     const json = await apiResponse.json()
  //     dispatch({ type: DescriptionActionTypes.FETCH_DESCRIPTION_SUCCESS, payload: json })
  //   } catch (e) {
  //     dispatch({ type: DescriptionActionTypes.FETCH_DESCRIPTION_ERROR, payload: 'ERROR' })
  //   }
  // }
}
