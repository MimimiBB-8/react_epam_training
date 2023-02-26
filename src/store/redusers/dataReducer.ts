import { DataAction, DataActionTypes, DataState } from './types'

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
  editing: false,
}

export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA:
      return {
        ...state,
        loading: true,
      }
    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading:false,
        error: null,
        data: action.payload,
      }
    case DataActionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        loading:false,
        data:[],
        error:action.payload
      }
      case DataActionTypes.FETCH_ADD_SUCCESS:
      return {
        ...state,
        loading:false,
        data: action.payload,
        error:null
      }
      case DataActionTypes.FETCH_DELETE_SUCCESS:
        return {
          ...state,
          data: state.data.filter((item) => item.id !== action.payload)
        };
        case DataActionTypes.FETCH_UPDATE_SUCCESS:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                editing: !item.editing
              }
            : item
        )
      };
    default:
      return state
  }
}
