import React from 'react'
import './../styles/formForgetPassword.css'
import { Link } from 'react-router-dom'

const FormForgetPassword = () => {
  return (
   <div className="forget-wrapper">
    <Link to="/forgetpassword">Forget Password?</Link>
   </div>
  )
}

export default FormForgetPassword