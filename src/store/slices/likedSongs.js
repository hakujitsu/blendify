import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  songs: [],
  offset: 0,
  totalNumber: 0,
  hasMoreSongs: true
}

export const likedSongsSlice = createSlice({
  name: 'likedSongs',
  initialState,
  reducers: {
    getSongs: (state, action) => {
      const { totalNumber, offset, songsToAdd } = action.payload;
      if (state.offset === offset) {
        state.hasMoreSongs = (totalNumber - state.songs.length - songsToAdd.length) > 0
        state.offset += 10
        state.songs = state.songs.concat(songsToAdd)
        state.totalNumber = totalNumber
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { getSongs } = likedSongsSlice.actions

export default likedSongsSlice.reducer