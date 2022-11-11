import { configureStore } from '@reduxjs/toolkit'
import likedSongsReducer from './slices/likedSongs'

export const store = configureStore({
  reducer: {
    likedSongs: likedSongsReducer,
  },
})