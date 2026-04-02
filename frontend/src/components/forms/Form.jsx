import { useId } from 'react'
import './../../styles/form.css'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

const Form = ({formDetails, title}) => {

    const uniqueId = useId()

    const Schema = {
        name:z.string().min(1,"Please enter the name")
            .min(3,"Name should be minimum of 3 characters")
            .max(20, 'Name should be maximum of 20 characters')
            .regex(/^[a-zA-Z0-9]+$/, 'Only alphanumeric characters allowed'),

        email:z.string().min(1,"Please enter the email").email("Please enter the valid email address"),

        password:z.string().min(1,"Please enter the password")
                .min(8,'The password should be minimun 8 characters')
                .max(16,'The password should be maximum 16 characters')
                .regex(/[A-Z]/, 'Must contain an uppercase letter')
                .regex(/[a-z]/, 'Must contain an lowercase letter')
                .regex(/[0-9]/, 'Must contain a number')
                .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/, 'Must contain a special character')
    }

    const formSchema = z.object(
        formDetails.reduce((acc, fields) => {
            acc[fields.field] = Schema[fields.field]
            return acc
        },{}))

    const {Field, handleSubmit, Subscribe} = useForm({
        defaultValues:
            formDetails.reduce((acc, fields) => {
            acc[fields.field] = ""
            return acc
        },{}),
        
        validators: {onSubmit: formSchema },
        onSubmit: async ({value, formApi}) => {
            console.log(value)
            formApi.reset()
        },
    })

  return (
    <form className="form-container" onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}>
        <div className="form-title">
            <span>{title}</span>
        </div>
        <div className="form-inputs-wrapper">
            {formDetails.map((item)=>(
                <Field name={item.field} 
                    validators={{ 
                        onChange: formSchema.shape[item.field], 
                        onBlur: formSchema.shape[item.field]
                    }} 
                    key={`${uniqueId}-${item.field}`}
                >
                  {(field) => {
                    let { handleChange, handleBlur, state } = field
                    let errorState = state.meta.isTouched && !!state.meta.errors?.length;
                    return (
                      <div className='form-inputs'>
                        <Input logo={item.logo} placeholder={item.field} type={item.type}
                            value={state.value} onBlur={handleBlur} error={errorState}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                        <div className="form-error">
                          {errorState && (<span>{state.meta.errors[0]?.message ?? state.meta.errors[0]}</span>)}
                        </div>
                      </div>
                    )}}
                </Field>
            ))}
        </div>
        <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) =>(
                <div className="btn-container" disabled={!canSubmit || isSubmitting}>
                    <Button>{isSubmitting ? "logging in" : "Submit"}</Button>
                </div>
            )}
        </Subscribe>
        <div className='form-link'>
            <span>Already have an account?</span>
            <a href="http://">Login</a>
        </div>
    </form>
  )
}

export default Form