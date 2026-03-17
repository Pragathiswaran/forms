import React from 'react'
import './../styles/Input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const Input = () => {
  return (
    <div className='input-container'>
        <div><FontAwesomeIcon icon={faUser} className='input-logo'/></div>
        <input type="text" className='input-field' placeholder='Name'/>
    </div>
  )
}

export default Input