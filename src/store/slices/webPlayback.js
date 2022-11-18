import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentSong: null,
  deviceId: null,
  isPlaying: false,
}

export const webPlaybackSlice = createSlice({
  name: 'webPlayback',
  initialState,
  reducers: {
    setDeviceId: (state, action) => {
      state.deviceId = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload
    },
    setCurrentSong: (state, action) => {
      console.log("SETTING CURRENT SONG")
      state.currentSong = action.payload
      console.log(action.payload)
      state.isPlaying = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentSong, setDeviceId, setIsPlaying } = webPlaybackSlice.actions

export default webPlaybackSlice.reducer