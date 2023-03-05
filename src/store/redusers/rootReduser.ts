import { combineReducers } from 'redux'
import { dataReducer } from './dataReducer'
import { descriptionReducer } from './descriptionReducer'
import { receivingIdReducer } from './receivingIdReducer'

export const rootReducer = combineReducers({
  data: dataReducer,
  description: descriptionReducer,
  recervingId: receivingIdReducer,
})

export type RootState = ReturnType<typeof rootReducer>
