import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  history: 0,
  future: 0
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    goBack: (state) => {
      state.future++
      state.history--
    },
    goForward: (state) => {
      state.history++
      state.future--
    },
    goToPage: (state) => {
      state.history++
      state.future = 0
    }
  },
})

export const { goBack, goForward, goToPage } = historySlice.actions

export default historySlice.reducer