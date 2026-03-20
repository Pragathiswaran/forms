import React from 'react'
import './../../styles/signup.css'
import Input from './../ui/Input'
import Button from './../ui/Button'

const Signup = () => {
    const signupForm =['name', 'email', 'password']
  return (
    <form className="form-container">
        <div className="form-title">
            <span>Sign up</span>
        </div>
        <div className="form-inputs">
            {signupForm.map((index, key)=>(
                <Input name={index} />
            ))}
        </div>
        <div className="btn-container">
            <Button children="Submit" />
        </div>
    </form>
  )
}

export default Signup