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

async function register(dataRegister) {
  // const { data } = await axios.post("", dataRegister, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // })
  // return data
  return dataRegister
}
