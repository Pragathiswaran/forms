import React from 'react'
import FormCard from '../ui/FormCard'
import Input from '../../../../components/ui/Input'
import Button from '../../../../components/ui/Button'
import { useForm } from '@tanstack/react-form'
import { verificationSchema } from './../../schema/FormSchema'

const VerificationForm = () => {

    const { Field, handleSubmit, Subscribe } = useForm({
        defaultValues :{
            otp:""
        },
        validators:{
            onSubmit: verificationSchema,
            onChange: verificationSchema
        },
        onSubmit: async ({value, formApi}) => {
            console.log(value)
            formApi.reset()
        }
    })
  return (
    <FormCard title={"Verification"} handleSubmit={handleSubmit}>
      <Field name={"otp"}>
        {(field)=>{
          const { handleChange, handleBlur, state } = field
          const errorMessage = state.meta.errors[0]?.message ?? state.meta.errors[0];
          const errorState = state.meta.isTouched && !!state.meta.errors?.length;
          return(
            <>
              <div className='form-inputs'>
                <Input placeholder={"Enter the otp...."} type={'text'}
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

export default VerificationForm