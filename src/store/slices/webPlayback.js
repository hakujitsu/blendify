import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDeviceId, setIsPlaying } = webPlaybackSlice.actions

export default webPlaybackSlice.reducer