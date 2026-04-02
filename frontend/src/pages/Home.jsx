import React from 'react'
import '../styles/home.css'
import { signupForm, loginForm } from '../utils'
import Form from './../components/forms/Form'

const Home = () => {
  return (
    <section>
      <Form formDetails={loginForm} title={'Login'}/>
      {/* <Form formDetails={signupForm} title={'Sign Up'}/> */}
    </section>
  )
}

export default Home