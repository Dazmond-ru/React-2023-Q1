import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
    page: 1,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    resetPage: (state) => {
      state.page = 1
    },
  },
})

export const getSearchValue = (state: RootState) => state.search.searchValue
export const getPage = (state: RootState) => state.search.page

export const { setSearchValue, setPage, resetPage } = searchSlice.actions

export const searchReducer = searchSlice.reducer
