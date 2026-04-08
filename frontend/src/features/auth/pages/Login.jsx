import { useId } from 'react'
import './../styles/login.css'
import { loginForm } from './../constant/FormData.jsx'
import FormCard  from './../components/FormCard.jsx'
import { useForm } from '@tanstack/react-form'
import Input from './../../../components/ui/Input'
import Button from '../../../components/ui/Button.jsx';
import { LoginSchema } from './../schema/FormSchema.js'
import FormCheckbox from '../components/formCheckbox.jsx'
import FormForgetPassword from '../components/FormForgetPassword.jsx'
import FormToggle from './../components/FormToggle.jsx'

const Login = () => {

    const uniqueId = useId
    const { Field, handleSubmit, Subscribe } = useForm({
        defaultValues:{
            name:"",
            password:""
        },
        validators:{
            onSubmit: LoginSchema,
            onChange: LoginSchema
        },
        onSubmit: async({value, formApi}) =>{ 
            console.log(value)
            formApi.reset()
        }
    })
  return (
    <FormCard handleSubmit={handleSubmit} title={'Log In'}>
       <div className="form-inputs-wrapper">
         {loginForm.map((item)=>(
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
         <FormCheckbox />
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

export default Login