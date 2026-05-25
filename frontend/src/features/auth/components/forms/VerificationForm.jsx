import React from 'react'
import './../../styles/login.css'
import FormCard from '../ui/FormCard'
import Input from '../../../../components/ui/Input'
import Button from '../../../../components/ui/Button'
import { useForm } from '@tanstack/react-form'
import { verificationSchema } from './../../schema/FormSchema'
import FormOtpInput from '../ui/FormOtpInput'
import useVerificationForm from '../../hooks/useVerificationForm'

const VerificationForm = () => {

  const { mutateAsync } = useVerificationForm();

    const { Field, handleSubmit, Subscribe } = useForm({
        defaultValues :{
            otp: new Array(4).fill("")
        },
        validators:{
          onSubmitAsync: async ({value, formApi}) => {
            try {
              const otp = value.otp.join("")
              const res = await mutateAsync(otp)
              console.log(res)
              formApi.reset()
              return null
            } catch (err) {
              console.log(err.response)
              const error = err.response
                if(error.status === 401){
                  formApi.reset()
                  return { form : 'The entered OTP is not valid' }
                }
            }
          }
        }
    })
  return (
    <FormCard title={"Verification"} handleSubmit={handleSubmit}>
      <Field name={"otp"}>
        {(field)=>{
          const { handleChange, handleBlur, state } = field
          {/* const errorMessage = state.meta.errors[0]?.message ?? state.meta.errors[0];
          const errorState = state.meta.isTouched && !!state.meta.errors?.length; */}
          return(
            <>
              <div style={{display: 'flex', justifyContent:'space-around'}}>
                <FormOtpInput
                  length={4}
                  value={state.value}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
              </div>
              <div className="form-error" style={{display: 'flex', justifyContent:'center', paddingTop:'10px'}}>
                <Subscribe selector={(state) => state.errorMap.onSubmit}>
                  {(err) => err && <span>{err.form}</span> }
                </Subscribe>
              </div>
            </>
        )}}
      </Field>
    </FormCard>
  )
}

export default VerificationForm