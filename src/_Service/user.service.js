import axios from 'axios'
// import config from './../config'
axios.defaults.headers = {
  'contentType': "application/json; charset=utf-8",
}
export const userService = {
  login,
  logout
}

async function login(userName, passWord) {
  try {
    const { data }  = await axios.post('http://localhost:5000/api/login', {userName, passWord})
  } catch (e) {
    console.log( e);
  }
  
  let resCode = "", resName = ""
  resCode = RES.status.code
  return resCode
}

function logout() {
  localStorage.removeItem('user')
}
