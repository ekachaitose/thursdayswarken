import { userService } from './../_Service'
import router from './../router'

const user = JSON.parse(localStorage.getItem('user'))
const state = user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null }

const actions = {
  async login ({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username })
    try {
      const user = await userService.login(username, password)
      commit('loginSuccess', user)
      router.push('/')
    } catch (error) {
      commit('loginFailure', error)
      dispatch('alert/error', error, { root: true })
    }
  },
  logout ({ commit }) {
    userService.logout()
    commit('logout')
  }
}

const mutations = {
  loginRequest (state, user) {
    state.status = { loggingIn: true }
    state.user = user
  },
  loginSuccess (state, user) {
    state.status = { loggedIn: true }
    state.user = user
  },
  loginFailure (state) {
    state.status = {}
    state.user = null
  },
  logout (state) {
    state.status = {}
    state.user = null
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
