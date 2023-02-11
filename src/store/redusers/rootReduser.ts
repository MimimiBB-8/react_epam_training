import { sortReducer } from './sortReduser';
import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer'

export const rootReducer = combineReducers({
  data: dataReducer,
  sort: sortReducer,
});

export type RootState = ReturnType<typeof rootReducer>
