import { createSlice } from '@reduxjs/toolkit'

// Context Type can be either: liked songs, spotify playlist, blendify playlist, album or song
const initialState = {
  contextType: null,
  currentSong: null,
  deviceId: null,
  isPlaying: false,
  isShuffle: false,
  progress: 0,
  queue: [],
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
    incrementProgress: (state) => {
      if (state.currentSong.track.duration_ms > state.progress) {
        state.progress += 500
      } else if (state.queue.length > 0) {
        state.currentSong = state.queue[0]
        state.queue = state.queue.shift()
      } else {
        state.isPlaying = false
      }
    },
    setProgress: (state, action) => {
      state.progress = action.payload
    },
    updateState: (state, action) => {
      const { currentSong, isPlaying, progress } = action.payload
      if (currentSong) {
        if (!state.currentSong || (state.currentSong.track.uri !== currentSong.track.uri))
        state.currentSong = currentSong
      }
      state.isPlaying = isPlaying
      state.progress = progress
    }
  },
})

// Action creators are generated for each case reducer function
export const { incrementProgress, setCurrentSong, setDeviceId, setIsPlaying, setProgress, updateState } = webPlaybackSlice.actions

export default webPlaybackSlice.reducer