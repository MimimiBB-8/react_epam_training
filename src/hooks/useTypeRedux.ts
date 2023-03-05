import { TypedUseSelectorHook, useSelector , useDispatch} from 'react-redux'
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store/redusers/rootReduser'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();