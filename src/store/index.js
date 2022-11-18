import { configureStore } from '@reduxjs/toolkit'
import likedSongsReducer from './slices/likedSongs'
import playlistsReducer from './slices/playlists'
import historyReducer from './slices/history'

export const store = configureStore({
  reducer: {
    likedSongs: likedSongsReducer,
    playlists: playlistsReducer,
    history: historyReducer,
  },
})