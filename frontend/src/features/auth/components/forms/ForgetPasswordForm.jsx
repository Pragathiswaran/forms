import React from 'react'
import './../../styles/formForgetPassword.css'
import FormCard from '../ui/FormCard'
import Input from './../../../../components/ui/Input'
import Button from '../../../../components/ui/Button'
import {useForm} from '@tanstack/react-form'
import { forgetPasswordFormData as data} from './../../constant/FormData'
import { ForgetPasswordSchema as formSchema } from './../../schema/FormSchema'
import useForgetPasswordForm from '../../hooks/useForgetPasswordForm'

const ForgetPasswordForm = () => {

  const { mutateAsync } = useForgetPasswordForm()
  const { Field, handleSubmit, Subscribe } = useForm({
    defaultValues:{ email:'' },
    validators:{
      onChange: formSchema,
      onSubmit: formSchema,
      onSubmitAsync : async ({value, formApi}) => {
          try{
            const res = await mutateAsync({email:value.email})
            console.log('success',res)
            return res
          } catch(err){
            console.log('Error', err)
          }
      }
    },
  })
  return (
    <FormCard title={'Forget Password'} handleSubmit={handleSubmit}>
      <div className='auth-description'>
        <span>Enter your email to get a verification code</span>
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
            </>
        )}}
      </Field>
      <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) =>(
          <div className="form-btn-container" disabled={!canSubmit || isSubmitting}>
            <Button>{isSubmitting ? "logging in" : "Submit"}</Button>
          </div>
        )}
      </Subscribe>
    </FormCard>
  )
}

export default ForgetPasswordForm