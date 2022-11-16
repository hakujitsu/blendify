import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playlists: [],
  offset: 0,
  totalNumber: 0,
  hasMorePlaylists: true,
}

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    getPlaylists: (state, action) => {
      const { totalNumber, offset, playlistsToAdd } = action.payload;
      if (state.offset === offset) {
        state.hasMorePlaylists = (totalNumber - state.songs.length - playlistsToAdd.length) > 0
        state.offset += 1
        state.playlists = state.songs.concat(playlistsToAdd)
        state.totalNumber = totalNumber
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { getPlaylists } = playlistsSlice.actions

export default playlistsSlice.reducer