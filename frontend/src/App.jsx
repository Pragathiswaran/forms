import React from 'react'
import './styles/App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgetPassword from './pages/ForgetPassword'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth/login' element={<Login />}/>
      <Route path='/auth/login/forgetpass' element={<ForgetPassword />}/>
      <Route path='/auth/signup' element={<Signup />}/>
    </Routes>
  )
}

export default App