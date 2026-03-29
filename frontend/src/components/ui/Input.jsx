import React from 'react'
import './../../styles/Input.css'

const Input = ({logo, error, placeholder, ...props}) => {

  const toFirstUpperCase = ( str ) => {
      if (!str) return ""
      return str[0].toUpperCase() + str.slice(1)
  }
  return (
    <div className={`input-container ${error ? 'error': 'default'}`}>
      {logo}
      <input className='input-field' placeholder={toFirstUpperCase(placeholder)} {...props}/>
    </div>
  )
}

export default Input