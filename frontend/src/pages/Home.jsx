import React from 'react'
import '../styles/home.css'
import Signup from '../features/auth/pages/Signup.jsx'
import Login from '../features/auth/pages/Login.jsx'

const Home = () => {
  return (
    <section>
      {/* <Signup /> */}
      <Login />
    </section>
  )
}

export default Home