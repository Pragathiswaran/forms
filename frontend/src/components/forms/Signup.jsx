import { useId } from 'react'
import './../../styles/signup.css'
import Input from './../ui/Input'
import Button from './../ui/Button'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

const Signup = () => {

    const uniqueId = useId()
    const signupForm =['name', 'email', 'password'];

    const formSchema = z.object({
        name: z.string().min(3,"Minimum 3 characters"),
        email: z.email()
    })

    const {Field, handleSubmit, Subscribe} = useForm({
        defaultValues:{
            name:"",
            email:"",
            password:""
        },
        onSubmit: async ({value}) => {
            console.log(value)
        },
        validators: {onSubmit: formSchema}
    })

  return (
    <form className="form-container" onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}>
        <div className="form-title">
            <span>Sign up</span>
        </div>
        <div className="form-inputs">
            {signupForm.map((index)=>(
                <Field name={index} key={`${uniqueId}-${index}`}>
                    {({handleChange}) =>(
                        <>
                            <Input name={index} onChange={(e) => handleChange(e.target.value)}/>
                            <Subscribe selector={(state) => state.fieldMeta[index]}>
                                {(meta) => meta?.isTouched && meta?.errors.length > 0 && (
                                    <span style={{ color: 'red', fontSize: '12px' }}>
                                        {meta.errors[0]?.message ?? meta.errors[0]}
                                    </span>
                                )}
                            </Subscribe>
                        </>
                    )}
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