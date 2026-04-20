import React from 'react'
import './../../styles/formCard.css'

const FormCard = ({children, handleSubmit, title}) => {
  return (
    <form className='form-container' onSubmit={
        (e) => {e.preventDefault(); handleSubmit()}
    }>
    <div className="form-title">
        <span>{title}</span>
    </div>
        {children}
    </form>
  )
}

export default FormCard