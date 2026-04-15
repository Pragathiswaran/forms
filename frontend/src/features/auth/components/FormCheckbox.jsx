import React from 'react'
import './../styles/formCheckbox.css'

const FormCheckbox = ({...props}) => {
  return (
    <label className="checkbox-wrapper">
        <input type="checkbox" {...props} />
        <span>Remember Me</span>
    </label>
  )
}

export default FormCheckbox