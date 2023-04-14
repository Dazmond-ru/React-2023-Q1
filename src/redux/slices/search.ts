import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

type SearchInitialState = {
  searchValue: string
  page: number
  sort: 'id' | 'alphabet'
}

const initialState: SearchInitialState = { searchValue: '', page: 1, sort: 'id' }

const searchSlice = createSlice({
  name: 'search',
  initialState,
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
    setSort: (state, action) => {
      state.sort = action.payload
    },
  },
})

export const getSearchValue = (state: RootState) => state.search.searchValue
export const getPage = (state: RootState) => state.search.page
export const getSort = (state: RootState) => state.search.sort

export const { setSearchValue, setPage, resetPage, setSort } = searchSlice.actions

export const searchReducer = searchSlice.reducer
