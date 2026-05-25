import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: { "Content-Type": 'application/json' }
})

const authApiLogin = async ({username, password}) => {
  const response = await api.post('/auth/login',{
    username: username,
    password: password
  })
  return response
}

const authApiSignup = async ({username, email, password}) => {
  const response = await api.post('/auth/signup', {
      username: username,
      email: email,
      password: password
  })
  return response
}

const authApiForgetPassword = async (email) => {
  const response = await api.post('/auth/login/forgetpass', email)
  return response
}

const authApiCheckAvailablity = async (field, value) => {
  const response = await api.post('/auth/check-avail',{
      field: field,
      value: value
  })
  return response
}

const authVerification = async (otp) => {
  const response = await api.post('/auth/login/verify',{
    otp: otp
  })
  return response
}

export {authApiLogin, authApiSignup, authApiForgetPassword, authApiCheckAvailablity, authVerification}