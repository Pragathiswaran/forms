import React from 'react'
import FormCard from '../ui/FormCard'
import Input from '../../../../components/ui/Input'
import Button from '../../../../components/ui/Button'
import { useForm } from '@tanstack/react-form'
import { verificationSchema } from './../../schema/FormSchema'
import FormOtpInput from '../ui/FormOtpInput'

const VerificationForm = () => {

    const { Field, handleSubmit, Subscribe } = useForm({
        defaultValues :{
            otp: new Array(4).fill("")
        },
        onSubmit: async ({value, formApi}) => {
            console.log(value.otp.join(''))
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
              <div style={{display: 'flex', justifyContent:'space-around'}}>
                <FormOtpInput
                  length={4}
                  value={state.value}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
                {/* <div className="form-error">{errorState && (<span>{errorMessage}</span>)}</div> */}
              </div>
            </>
        )}}
      </Field>
    </FormCard>
  )
}

export default VerificationForm