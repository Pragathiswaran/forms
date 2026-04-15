import { SignupSchema, LoginSchema } from './auth.validator.js'

const signupController = (req, res) => {
    const {username, email, password} = req.body
    console.log("Signup form value : ",username, req.body)

    const validateUser = SignupSchema.safeParse({
        username:username,
        email: email,
        password: password
    })

    if (!validateUser.success){
        const error = validateUser.error?.issues.map(issue =>({
            field: issue.path[0],
            message: issue.message
        }))
        console.log(error)
       
        return res.status(200).json({error})
    }

    return res.status(200).json({"message": "The user has been registered successfully"})
}

const checkAvailController = (req, res) => {
    const {field, value} = req.body

    console.log(field, value)
    if(field === "username" && value === "Praga"){
        return res.status(200).json({availability: false, message: `${field} is already taken`})
    }

    if(field === "email" && value === "praga@gmail.com"){
        return res.status(200).json({availability: false, message: `${field} is already taken`})
    }

    return res.status(200).json({availability: true, message: `${field} doesn't taken`})
}
export { signupController, checkAvailController }