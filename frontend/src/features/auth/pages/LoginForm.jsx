import { useId } from 'react'
import './../styles/login.css'
import { loginFormData } from '../constant/FormData.jsx'
import FormCard  from '../components/FormCard.jsx'
import { useForm } from '@tanstack/react-form'
import Input from '../../../components/ui/Input.jsx'
import Button from '../../../components/ui/Button.jsx';
import { LoginSchema } from '../schema/FormSchema.js'
import FormCheckbox from '../components/formCheckbox.jsx'
import FormForgetPassword from '../components/FormForgetPassword.jsx'
import FormToggle from '../components/FormToggle.jsx'
import useLoginForm from '../hooks/useLoginForm.jsx'

const LoginForm = () => {

    const uniqueId = useId()

    const {mutate} = useLoginForm()

    const { Field, handleSubmit, Subscribe } = useForm({
        defaultValues:{
            username:"",
            password:"",
            agree: false,
        },
        validators:{
            onSubmit: LoginSchema,
            onChange: LoginSchema
        },
        onSubmit: async({value, formApi}) =>{ 
            console.log(value)
            mutate({
                username: value.username,
                password: value.password
            })
            formApi.reset()
        }
    })
  return (
    <FormCard handleSubmit={handleSubmit} title={'Log In'}>
       <div className="form-inputs-wrapper">
         {loginFormData.map((item)=>(
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
       <div className="form-checkbox-wrapper">
         <Field name="agree">
            {({handleChange, handleBlur, state})=>{
                return(
                    <FormCheckbox 
                        checked={state.value}
                        onChange={(e) => handleChange(e.target.checked)}
                        onBlur={handleBlur}
                    />
                )
            }}
         </Field>
         <FormForgetPassword />
       </div>
        <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) =>(
            <div className="btn-container" disabled={!canSubmit || isSubmitting}>
                <Button>{isSubmitting ? "logging in" : "Submit"}</Button>
            </div>
        )}
        </Subscribe>
        <div className="form-footer">
            <FormToggle mode="login"/>
        </div>
    </FormCard>
  )
}

export default LoginForm