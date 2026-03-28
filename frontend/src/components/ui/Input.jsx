import React from 'react'
import './../../styles/Input.css'

const Input = ({logo, error, ...props}) => {
  return (
    <div className={`input-container ${error ? 'error': 'default'}`}>
      {logo}
      <input className='input-field' {...props}/>
    </div>
  )
}

export default Input