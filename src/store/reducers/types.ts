export interface DataState {
  data: any[]
  loading: boolean
  error: null | string
  editing:false,
}

export enum DataActionTypes {
  FETCH_DATA = 'FETCH_DATA',
  FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
  FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
  FETCH_DELETE_SUCCESS = 'FETCH_DELETE_SUCCESS',
  FETCH_UPDATE_SUCCESS = 'FETCH_UPDATE_SUCCESS',
  FETCH_ADD_SUCCESS = 'FETCH_ADD_SUCCESS'
}

interface FetchDataAction {
  type: typeof DataActionTypes.FETCH_DATA
}

interface FetchDataSuccessAction {
  type: typeof DataActionTypes.FETCH_DATA_SUCCESS
  payload: any[]
}

interface FetchDataErrorAction {
  type: typeof DataActionTypes.FETCH_DATA_ERROR
  payload: string
}

interface FetchDeleteSuccessAction {
  type: typeof DataActionTypes.FETCH_DELETE_SUCCESS
  payload: string
}

interface FetchAddSuccessAction {
  type: typeof DataActionTypes.FETCH_ADD_SUCCESS
  payload: any[]
}

interface FetchUpdateSuccessAction {
  type: typeof DataActionTypes.FETCH_UPDATE_SUCCESS
  payload: string
}

export type DataAction = FetchDataAction | FetchDataSuccessAction | FetchDataErrorAction | FetchDeleteSuccessAction | FetchUpdateSuccessAction | FetchAddSuccessAction

export interface DescriptionState {
  data: any[]
  loading: boolean
  error: null | string
}

export enum DescriptionActionTypes {
  FETCH_DESCRIPTION = 'FETCH_DESCRIPTION',
  FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS',
  FETCH_DESCRIPTION_ERROR = 'FETCH_DESCRIPTION_ERROR',
}

interface FetchDescriptionAction {
  type: typeof DescriptionActionTypes.FETCH_DESCRIPTION
}

interface FetchDescriptionSuccessAction {
  type: typeof DescriptionActionTypes.FETCH_DESCRIPTION_SUCCESS
  payload: any[]
}

interface FetchDescriptionErrorAction {
  type: typeof DescriptionActionTypes.FETCH_DESCRIPTION_ERROR
  payload: string
}

export type DescriptionAction =
  | FetchDescriptionAction
  | FetchDescriptionSuccessAction
  | FetchDescriptionErrorAction

export interface ReservingIdState {
  itemId: number
}

export enum ReservingIdActionTypes {
  RESERVING_ID = 'RESERVING_ID',
}

interface ReservingAction {
  payload: number
  type: typeof ReservingIdActionTypes.RESERVING_ID
}

export type ReservingIdAction = ReservingAction



