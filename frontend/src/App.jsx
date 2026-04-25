import React from 'react'
import './styles/App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgetPassword from './pages/ForgetPassword'
import Verification from './pages/Verification'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth/login' element={<Login />}/>
      <Route path='/auth/login/forgetpass' element={<ForgetPassword />}/>
      <Route path='/auth/signup' element={<Signup />}/>
      <Route path='/auth/verification' element={<Verification />}/>
    </Routes>
  )
}

export default App