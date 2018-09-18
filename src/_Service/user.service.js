import axios from 'axios'

export const userService = {
  login,
  logout,
  register
}

async function login(userName, passWord) {
  const { data } = await axios.post("http://localhost:5000/api/login", { userName, passWord});

  return data;
}

function logout() {
  localStorage.removeItem('user')
}

async function register({userName, passWord}) {
  const { data } = await axios.post("http://localhost:5000/api/users", {userName, passWord})
  console.log(data)
  return data
}
