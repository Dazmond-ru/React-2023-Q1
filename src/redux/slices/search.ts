import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
  },
})

export const getSearchValue = (state: RootState) => state.search.searchValue

export const { setSearchValue } = searchSlice.actions

export const searchReducer = searchSlice.reducer
