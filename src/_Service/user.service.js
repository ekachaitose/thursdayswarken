import axios from 'axios'
// import config from './../config'

export const userService = {
  login,
  logout
}

async function login(userName, passWord) {
  try {
    const { data }  = await axios.post('http://localhost:5000/api/login', {userName, passWord},{
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'}

    })
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
