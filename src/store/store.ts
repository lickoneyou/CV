import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { pagesReducer } from '../reducers/pagesReducer'

const reducers = combineReducers({
  pagesReducer,
})

export const store = configureStore({
  reducer: reducers,
})
