import {useId} from 'react'
import './../styles/signup.css';
import { signupFormData } from '../constant/FormData.jsx'
import FormCard  from '../components/FormCard.jsx'
import { useForm } from '@tanstack/react-form'
import Input from '../../../components/ui/Input.jsx'
import Button from '../../../components/ui/Button.jsx';
import { SignupSchema } from '../schema/FormSchema.js'
import FormToggle from '../components/FormToggle.jsx';
import useSignupForm from '../hooks/useSignupForm.jsx';

const SignupForm = () => {

    const uniqueId = useId()

    const { mutate } = useSignupForm();

    const { Field, handleSubmit, Subscribe } = useForm({
        defaultValues:{
            name:"",
            email:"",
            password:""
        },
        validators:{
            onSubmit: SignupSchema,
            onChange: SignupSchema
        },
        onSubmit: async({value, formApi}) =>{ 
            console.log(value)
            mutate({
                username: value.name,
                email: value.email,
                password: value.password
            })
            formApi.reset()
        }
    })
  return (
    <FormCard handleSubmit={handleSubmit} title={'Sign Up'}>
       <div className="form-inputs-wrapper">
         {signupFormData.map((item)=>(
            <Field name={item.field} key={`${uniqueId}-${item.field}`}>
                {(field) => {
                    const { handleChange, handleBlur, state } = field
                    const errorMessage = state.meta.errors[0]?.message ?? state.meta.errors[0];
                    const errorState = state.meta.isTouched && !!state.meta.errors?.length;
                    return (
                        <div className='form-inputs'>
                        <Input logo={item.logo} placeholder={item.field} type={item.type}
                            value={state.value} onBlur={handleBlur} error={errorState}
                            onChange={(e) => handleChange(e.target.value)}
                        />
                        <div className="form-error">
                            {errorState && (<span>{errorMessage}</span>)}
                        </div>
                        </div>
                )}}
            </Field>))}
       </div>
        <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) =>(
            <div className="btn-container" disabled={!canSubmit || isSubmitting}>
                <Button>{isSubmitting ? "logging in" : "Submit"}</Button>
            </div>
        )}
        </Subscribe>
        <div className="form-footer">
            <FormToggle mode="signup"/>
        </div>
    </FormCard>
  )
}

export default SignupForm