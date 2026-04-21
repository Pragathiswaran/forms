import React from 'react'
import './../../styles/formForgetPassword.css'
import FormCard from '../ui/FormCard'
import Input from './../../../../components/ui/Input'
import Button from '../../../../components/ui/Button'
import {useForm} from '@tanstack/react-form'
import { forgetPasswordFormData as data} from './../../constant/FormData'
import { ForgetPasswordSchema } from './../../schema/FormSchema'

const ForgetPasswordForm = () => {

  const { Field, handleSubmit, Subscribe } = useForm({
    defaultValues:{ email:'' },
    validators:{
      onChange: ForgetPasswordSchema,
      onSubmit: ForgetPasswordSchema,
      onSubmitAsync : async ({value, formApi}) => {
          console.log(value)
          formApi.reset()
      }
    },
  })
  return (
    <FormCard title={'Forget Password'} handleSubmit={handleSubmit}>
        <div className='auth-description'>
          <span>Enter your email to get a verification code.</span>
        </div>
        <Field name={"email"}>
            {(field)=>{
                  const { handleChange, handleBlur, state } = field
                  const errorMessage = state.meta.errors[0]?.message ?? state.meta.errors[0];
                  const errorState = state.meta.isTouched && !!state.meta.errors?.length;
                return(
                 <>
                   <div className='form-inputs'>
                      <Input logo={data.logo} placeholder={data.field} type={data.type}
                        value={state.value} onBlur={handleBlur} error={errorState}
                        onChange={(e) => handleChange(e.target.value)}
                        />
                        <div className="form-error">{errorState && (<span>{errorMessage}</span>)}</div>
                    </div>
                    <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
                      {([canSubmit, isSubmitting]) =>(
                          <div className="btn-container" disabled={!canSubmit || isSubmitting}>
                              <Button>{isSubmitting ? "logging in" : "Submit"}</Button>
                          </div>
                      )}
                    </Subscribe>
                 </>
            )}}
        </Field>
    </FormCard>
  )
}

export default ForgetPasswordForm