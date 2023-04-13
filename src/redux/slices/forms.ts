import { createSlice } from '@reduxjs/toolkit'
import { CardState } from 'interfaces/interfaces'
import { RootState } from '../../redux/store'

const formsSlice = createSlice({
  name: 'forms',
  initialState: {
    data: [],
  } as { data: CardState[] },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
})

export const getData = (state: RootState) => state.forms.data

export const { setData } = formsSlice.actions

export const formsReducer = formsSlice.reducer
