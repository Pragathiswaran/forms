import React from 'react'
import './../../styles/Input.css'
import { toFirstUpperCase } from './../../utils'

const Input = ({style = "default", logo, error, placeholder, ...props}) => {
  return (
    <div className={`input-container ${style === "default" ? 'input-default' : 'input-otp'} ${error ? 'error': 'default'}`}>
      { style === "default" && <div className='input-logo'>{logo}</div>}
      <input className={`input-field ${style === "default" ? 'input-field-default' : 'input-field-otp'}`} 
      placeholder={
    style === "default"
      ? toFirstUpperCase(placeholder)
      : ""
  }
      {...props}/>
    </div>
  )
}

export default Input