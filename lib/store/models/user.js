export default {
  state: {
    publicRepos: null,
    privateRepos: null
  },
  reducers: {
    setUser(state, payload){
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: (dispatch) => ({

  })
}