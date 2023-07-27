import { configureStore } from '@reduxjs/toolkit'
import arrryReducer from './arraySlice'

export const store = configureStore({
  reducer: {
    resultarray: arrryReducer,
  },
})