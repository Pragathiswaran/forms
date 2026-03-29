import React from 'react'
import "./../../styles/Button.css"

const Button = ({children}) => {
  return <button className='btn' type='submit'>{children}</button>
}

export default Button