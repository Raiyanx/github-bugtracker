import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    show: false
  },
  reducers: {
    showBar: state => {
      state.show = true
    },
    hideBar: state => {
      state.show = false
    }
  }
})

export const { showBar, hideBar } = sidebarSlice.actions

export default sidebarSlice.reducer