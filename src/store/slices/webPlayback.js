import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentSong: null,
  deviceId: null,
  isPlaying: false,
  progress: 0,
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
      state.isPlaying = true
      state.progress = 0
      console.log(state.isPlaying)
    },
    incrementProgress: (state) => {
      if (state.currentSong.track.duration_ms > state.progress) {
        state.progress += 500
      } else {
        state.isPlaying = false
      }
    },
    setProgress: (state, action) => {
      state.progress = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { incrementProgress, setCurrentSong, setDeviceId, setIsPlaying, setProgress } = webPlaybackSlice.actions

export default webPlaybackSlice.reducer