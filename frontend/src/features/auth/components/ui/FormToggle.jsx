import React from 'react'
import './../../styles/formToggle.css'
import { Link } from 'react-router-dom'

const FormToggle = ({mode, flag = true}) => {
 
  const toggleData = {
    login:{
      text:"Don't have an account?",
      path:'/auth/signup',
      link:'Signup'
    },
    signup:{
      text:"Already have an account?",
      path:'/auth/login',
      link:'Login'
    },
    forgetPassword:{
      path:'/auth/login/forgetpass',
      link:'Forget Password?'
    }
  }
  return (
    <div className="form-toggle-wrapper">
      { flag && <span>{toggleData[mode].text}</span> }
      <Link to={toggleData[mode].path}>{toggleData[mode].link}</Link>
    </div>
  )
}

export default FormToggle