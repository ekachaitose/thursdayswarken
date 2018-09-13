import axios from 'axios'
// import config from './../config'
axios.defaults.headers = {
  'contentType': "application/json; charset=utf-8",
}
export const userService = {
  login,
  logout,
  register
}

async function login(userName, passWord) {
  try {
    const { data } = await axios.post("http://localhost:5000/api/login", { userName, passWord });
    console.log('e :', data);
  } catch (error) {
    console.log('e :', e);
  }
  
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
