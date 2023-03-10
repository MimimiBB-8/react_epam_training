import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './redusers/rootReduser'
import { composeWithDevTools } from '@redux-devtools/extension'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
