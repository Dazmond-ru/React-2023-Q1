import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { api, charactersReducer } from './api/api'
import { searchReducer } from './slices/search'

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
