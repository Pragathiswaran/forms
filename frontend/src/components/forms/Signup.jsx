import { useId } from 'react'
import './../../styles/signup.css'
import Input from './../ui/Input'
import Button from './../ui/Button'
import { signupForm } from '../../utils'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

const Signup = () => {

    const uniqueId = useId()

    const formSchema = z.object({
        name: z.string().min(1,"Please enter the name").min(3,"Minimum 3 characters"),
        email: z.email("Please enter the valid email address").min(1,"Please enter the email"),
        password:z.string().min(1,"Please enter the password").min(8,'The should be minimun 8 characters')
    })

    const {Field, handleSubmit} = useForm({
        defaultValues:{
            name:"",
            email:"",
            password:""
        },
        validators: {
            onSubmit: formSchema,
            onBlur: formSchema
        },
        onSubmit: async ({value, formApi}) => {
            console.log(value)
            formApi.reset()
        },
    })

  return (
    <form className="form-container" onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}>
        <div className="form-title">
            <span>Sign up</span>
        </div>
        <div className="form-inputs-wrapper">
            {signupForm.map((index)=>(
                <Field name={index.field.toLowerCase()} key={`${uniqueId}-${index.field}`}>
                  {({ handleChange, handleBlur, state }) => {
                    let errorState = state.meta.isTouched && !!state.meta.errors?.length;
                    return (
                      <div className='form-inputs'>
                        <Input logo={index.logo} placeholder={index.field} type={index.type}
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
        <div className="btn-container">
            <Button children="Submit" type="submit"/>
        </div>
    </form>
  )
}

export default Signup