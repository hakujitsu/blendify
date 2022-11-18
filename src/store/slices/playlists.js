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
        state.hasMorePlaylists = (totalNumber - state.playlists.length - playlistsToAdd.length) > 0
        state.offset += 1
        state.playlists = state.playlists.concat(playlistsToAdd)
        state.totalNumber = totalNumber
      }
    },
    addPlaylistTracks: (state, action) => {
      const { id, tracks, offset } = action.payload;
      let playlist = state.playlists.find(p => p.id === id)
      if (!playlist) {
        return
      }

      if (playlist.offset === offset) {
        playlist.hasMoreSongs = (playlist.totalSongs - playlist.tracks.length - tracks.length) > 0
        playlist.offset += 1
        playlist.tracks = playlist.tracks.concat(tracks)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { getPlaylists, addPlaylistTracks } = playlistsSlice.actions

export default playlistsSlice.reducer