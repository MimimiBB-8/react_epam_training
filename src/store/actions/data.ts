import { DataActionTypes } from '../reducers/types'
import axios from 'axios';

export const fetchDataRequest = () => {
  return {
    type: DataActionTypes.FETCH_DATA
  };
};

export const fetchDataSuccess = (data: any) => {
  return {
    type: DataActionTypes.FETCH_DATA_SUCCESS,
    payload: data
  };
};


export const fetchDataFailure = (errors: any) => {
  return {
    type: DataActionTypes.FETCH_DATA_ERROR,
    payload: errors
  };
};

export const removeData = (id: string) => {
  return {
    type: DataActionTypes.FETCH_DELETE_SUCCESS,
    payload: id
  };
};

export const editData = (data: any) => {
  return {
    type: DataActionTypes.FETCH_UPDATE_SUCCESS,
    payload: data
  };
};
export const addNewData = (data: any) => {
  return {
    type: DataActionTypes.FETCH_UPDATE_SUCCESS,
    payload: data
  };
};

export const fetchData = (param: string) => {
  return (dispatch: any) =>  {
    dispatch(fetchDataRequest);
    return axios.get(`http://localhost:4000/movies?limit=9?${param}`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data.data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDataFailure(errorMsg));
      })  
  }
}

export const deleteData = (id: string) => {
  return (dispatch:any) => {
    dispatch(fetchDataRequest);
    axios
      .delete(`http://localhost:4000/movies/${id}`)
      .then((response) => {
        dispatch(removeData(id))
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);  
        dispatch(fetchDataFailure(errorMsg));
      });
  };
};

export const updateData = (param: any) => {
  return (dispatch: any) => {
    dispatch(fetchDataRequest);
    axios
      .put('http://localhost:4000/movies', param, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },)
      .then((response) => {
        dispatch(editData(param.id))
        
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);  
        dispatch(fetchDataFailure(errorMsg));
      });
    }
};

export const addData = (data: any) => {
  return (dispatch: any) => {
      axios.post('http://localhost:4000/movies', data, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },)
          .then(response => {
              dispatch(addNewData(response.data))
          })
          .catch((error) => {
            const errorMsg = error.message;
            console.log(errorMsg);  
            dispatch(fetchDataFailure(errorMsg));
          });
  }
}