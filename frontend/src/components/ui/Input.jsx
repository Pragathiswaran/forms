import React from 'react'
import './../../styles/Input.css'
import { toFirstUpperCase } from './../../utils'

const Input = ({logo, error, placeholder, ...props}) => {
  return (
    <div className={`input-container ${error ? 'error': 'default'}`}>
      <div className='input-logo'>{logo}</div>
      <input className='input-field' placeholder={toFirstUpperCase(placeholder)} {...props}/>
    </div>
  )
}

export default Input