import React from 'react'
import './../styles/formToggle.css'
import { Link } from 'react-router-dom'

const FormToggle = ({mode}) => {

  const toggleData = {
    login:{
      text:"Don't have an account?",
      path:'/signup',
      link:'Signup'
    },
    signup:{
      text:"Already have an account?",
      path:'/login',
      link:'Login'
    }
  }
  return (
    <div className="form-toggle-wrapper">
        <span>{toggleData[mode].text}</span>
        {/* <a href="http://">{mode == "login"? "SignUp" : "Login"}</a> */}
        <Link to={toggleData[mode].path}>{toggleData[mode].link}</Link>
    </div>
  )
}

export default FormToggle