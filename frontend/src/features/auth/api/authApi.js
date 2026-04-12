import axios from 'axios'

const authApiLogin = ({username, password}) => {
  return axios.post('/auth/login',{
    username: username,
    password: password
  })
}

const authApiSignup = ({username, email, password}) => {
    return axios.post('/auth/signup', {
        username: username,
        email: email,
        password: password
    })
}

const authApiForgetPassword = () => {}

export default {authApiLogin, authApiSignup}