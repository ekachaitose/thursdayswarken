import { userService } from './../_Service'
import router from './../router'
import { stat } from 'fs';

const user = JSON.parse(localStorage.getItem('user'))
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }

const actions = {
  async login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username })
    try {
      const user = await userService.login(username, password)
      console.log(user)
       commit('loginSuccess', user)

      router.push('/')
    } catch (error) {
      console.log(error)
      commit('loginFailure', error)
      dispatch('alert/error', error, { root: true })
    }
  },
  async register({dispatch,commit}, {username,password}){
    commit('resgisterRequest', { username })
    try {
      const user = await userService.register(username, password)
      console.log(user)
       commit('RegisterSuccess', user)
       router.push('/login')
    } catch (error) {
      console.log(error)
      commit('resgisterFailure', error)
      dispatch('alert/error', error, { root: true })
    }

  },
  logout({ commit }) {
    userService.logout()
    commit('logout')
  }
}

const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true }
    state.user = user
  },
  loginSuccess(state, user) {
    state.status = { loggedIn: true }
    state.user = user
  },
  loginFailure(state) {
    state.status = {}
    state.user = null
  },
  logout(state) {
    state.status = {}
    state.user = null
  },
  resgisterRequest(state,user){
    state.status = { register: 'success'}
    state.user = user
  },
  resgisterFailure(state){
    state.status = { register: 'failed'}
   
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
