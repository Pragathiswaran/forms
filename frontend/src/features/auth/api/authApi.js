import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: { "Content-Type": 'application/json' }
})

const authApiLogin = ({username, password}) => {
  return api.post('/auth/login',{
    username: username,
    password: password
  })
}

const authApiSignup = ({username, email, password}) => {
  return api.post('/auth/signup', {
      username: username,
      email: email,
      password: password
  })
}

const authApiForgetPassword = () => {}

const authApiCheckAvailablity = async (field, value) => {
  const response = await api.post('/auth/check-avail',{
      field: field,
      value: value
  })

  return response
}

export {authApiLogin, authApiSignup, authApiForgetPassword, authApiCheckAvailablity}