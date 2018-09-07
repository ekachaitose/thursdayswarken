import axios from 'axios'
import config from './../config'

export const userService = {
  login,
  logout
}

async function login (username, password) {
  try {
    const { data } = await axios.post(config.api + '/api/v1/users/login', { username, password })
    localStorage.setItem('user', JSON.stringify(data))
    return data
  } catch (e) {
    if (typeof e.response !== 'undefined') {
      if (e.response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        // location.reload(true)
      }
      throw e
    } else {
      throw e
    }
  }
}

function logout () {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}
