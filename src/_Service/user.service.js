import axios from 'axios'
// import config from './../config'
// axios.defaults.headers = {
//   'contentType': "application/json; charset=utf-8",
// }
export const userService = {
  login,
  logout
}

async function login(userName, passWord) {
  const { data } = await axios.post("http://192.168.0.142:5000/api/login", { userName, passWord }, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  
  return data;
}

function logout() {
  localStorage.removeItem('user')
}
