import React from 'react'
import './../../styles/Input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const Input = ({type, name, onChange, onBlur, value}) => {
  return (
    <div className='input-container'>
      <FontAwesomeIcon icon={faUser} className='input-logo'/>
      <input type={type} className='input-field' onChange={onChange} 
            placeholder={name} onBlur={onBlur} value={value}
      />
    </div>
  )
}

export default Input