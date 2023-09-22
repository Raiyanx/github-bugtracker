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

export const selectShow = state => state.sidebar.show

export default sidebarSlice.reducer