// import axios from 'axios'
// import config from './../config'

export const userService = {
  login,
  logout
}

async function login (username, password) {
  return { username, password }
}

function logout () {
  localStorage.removeItem('user')
}
