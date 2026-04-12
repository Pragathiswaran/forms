import React from 'react'
import './../styles/formForgetPassword.css'
import { Link } from 'react-router-dom'

const FormForgetPassword = () => {
  return (
   <div className="forget-wrapper">
    <Link to="/auth/login/forgetpass">Forget Password?</Link>
   </div>
  )
}

export default FormForgetPassword