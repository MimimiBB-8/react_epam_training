
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import { RootState } from '../store/redusers/rootReduser'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
