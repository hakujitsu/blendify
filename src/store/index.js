import { configureStore } from '@reduxjs/toolkit'
import likedSongsReducer from './slices/likedSongs'
import playlistsReducer from './slices/playlists'

export const store = configureStore({
  reducer: {
    likedSongs: likedSongsReducer,
    playlists: playlistsReducer,
  },
})