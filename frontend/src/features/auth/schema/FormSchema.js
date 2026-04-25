import { z } from "zod"

const Schema = {
        name:z.string().nonempty("Please enter the name")
            .min(3,"Name should be minimum of 3 characters")
            .max(20, 'Name should be maximum of 20 characters')
            .regex(/^[a-zA-Z0-9]+$/, 'Only alphanumeric characters allowed'),

        email:z.string().nonempty("Please enter the email").email("Please enter the valid email address"),

        password:z.string().nonempty("Please enter the password")
                .min(8,'The password should be minimun 8 characters')
                .max(16,'The password should be maximum 16 characters')
                .regex(/[A-Z]/, 'Must contain an uppercase letter')
                .regex(/[a-z]/, 'Must contain an lowercase letter')
                .regex(/[0-9]/, 'Must contain a number')
                .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/, 'Must contain a special character'),
        agree:z.boolean(),
        otp: z.string().nonempty("Please enter the OTP").regex(/^\d+$/,"The OTP must be the number").max(4,"The OTP must be 4 digits")
    }

const SignupSchema = z.object({
    username: Schema.name,
    email: Schema.email,
    password: Schema.password
})

const LoginSchema = z.object({
    username:Schema.name,
    password: Schema.password,
    agree:Schema.agree
})

const ForgetPasswordSchema = z.object({
    email : Schema.email,
})

const verificationSchema = z.object({
    otp : Schema.otp
})
export { SignupSchema, LoginSchema, ForgetPasswordSchema, verificationSchema}