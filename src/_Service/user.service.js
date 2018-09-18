import axios from 'axios'
import router from './../router'

export const userService = {
  login,
  logout,
  register
}

async function login(userName, passWord) {
  const { data } = await axios.post("http://localhost:5000/api/login", { userName, passWord});
  console.log('data',data)
  localStorage.setItem('token', data.Status.data[0].token)
}

function logout() {
  localStorage.removeItem('user')
}

async function register({userName, passWord}) {
  const { data } = await axios.post("http://localhost:5000/api/users", {"userName":userName,"passWord":passWord},{"headers": { Authorization: localStorage.getItem('token')}})
  router.push('/login')
}

