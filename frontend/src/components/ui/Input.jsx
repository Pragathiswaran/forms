import React from 'react'
import './../../styles/Input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const Input = ({name}) => {
  return (
    <div className='input-container'>
      <FontAwesomeIcon icon={faUser} className='input-logo'/>
      <input type={name} className='input-field' placeholder={name} name={name}/>
    </div>
  )
}

export default Input