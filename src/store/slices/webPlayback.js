import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  player: null,
  deviceId: null,

}

export const webPlaybackSlice = createSlice({
  name: 'webPlayback',
  initialState,
  reducers: {
    setPlayer: (state, action) => {
      console.log(action.payload)
      state.player = action.payload;
    },
    setDeviceId: (state, action) => {
      state.deviceId = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDeviceId, setPlayer } = webPlaybackSlice.actions

export default webPlaybackSlice.reducer