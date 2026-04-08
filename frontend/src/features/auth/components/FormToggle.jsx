import React from 'react'
import './../styles/formToggle.css'

const FormToggle = ({mode}) => {
  return (
    <div className="form-toggle-wrapper">
        <span>{mode == "login" ? "Don't have an account?" : "Already have an account?"}</span>
        <a href="http://">{mode == "login"? "SignUp" : "Login"}</a>
    </div>
  )
}

export default FormToggle