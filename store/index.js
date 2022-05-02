export const state = () => ({
  token: null,
  authorizationErrorList: [],
  showSignInForm: false,
  showReNameProjectForm: false,
  projectList: [],
  projectIdForChangingName: null
})

export const mutations = {
  setToken (state, data) {
    state.token = data
  },
  setAuthorizationErrorList (state, data) {
    state.authorizationErrorList = data
  },
  setShowSignInForm (state, data) {
    state.showSignInForm = data
  },
  setShowReNameProjectForm (state, data) {
    state.showReNameProjectForm = data
  },
  setProjectList (state, data) {
    state.projectList = data
  },
  setProjectIdForChangingName (state, data) {
    state.projectIdForChangingName = data
  }
}

export const actions = {
  async signIn ({ commit, dispatch }, payload) {
    try {
      await this.$auth.loginWith('local', {
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      commit('setToken', this.$auth.strategy.token.get())
      dispatch('getProjects')
      commit('setAuthorizationErrorList', [])
      commit('setShowSignInForm', false)
    } catch (error) {
      commit('setAuthorizationErrorList', Object.values(error.response.data.first_errors))
    }
  },
  async getProjects ({ commit, state }) {
    const res = await this.$axios.get('projects-manage/index', {
      headers: {
        'Authorization': state.token
      }
    })
    commit('setProjectList', res.data.projects)
  },
  async changeProjectName ({ state, dispatch }, newName) {
    const newProjectData = new FormData
    newProjectData.append('name', newName)
    await this.$axios.post('projects-manage/update', newProjectData, {
      headers: {
        'Authorization': state.token,
        'Content-Type': 'multipart/form-data' 
      },
      params: {
        id: state.projectIdForChangingName
      }
    })
    dispatch('getProjects')
  }
}