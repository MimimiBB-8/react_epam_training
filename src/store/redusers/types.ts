export interface DataState {
  data: any[],
  loading: boolean,
  error: null | string
}

export enum DataActionTypes {
  FETCH_DATA = 'FETCH_DATA',
  FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
  FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
}

interface FetchDataAction {
  type: typeof DataActionTypes.FETCH_DATA,
}

interface FetchDataSuccessAction {
  type: typeof DataActionTypes.FETCH_DATA_SUCCESS,
  payload: any[]
}

interface FetchDataErrorAction {
  type: typeof DataActionTypes.FETCH_DATA_ERROR,
  payload: string
}

export type DataAction = FetchDataAction | FetchDataSuccessAction | FetchDataErrorAction;


export interface SortState {
  parametr: string
}

export enum SortActionTypes {
  FILTER_BY_GENRE = 'FILTER_BY_GENREA',
  SORT_BY = 'SORT_BY'
}

interface FilterAction {
  type: typeof SortActionTypes.FILTER_BY_GENRE,
  payload: string
}

interface SortByAction {
  type: typeof SortActionTypes.SORT_BY,
  payload: string
}

export type SortAction = FilterAction | SortByAction;

