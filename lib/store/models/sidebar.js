export default {
  state: {
    show: false
  },
  reducers: {
    showBar(state, payload) {
      return {
        show: true
      }
    },
    hideBar(state, payload) {
      return {
        show: false
      }
    }
  },
  effects: (dispatch) => ({

  })
}