import { SignupSchema, LoginSchema } from './auth.validator.js'

const signupController = (req, res) => {
    const {username, email, password} = req.body
    console.log(req.body)
    const validateUser = SignupSchema.safeParse({
        username:username,
        email: email,
        password: password
    })

    if (validateUser.success){
        // const error = validateUser.error.issues.map(issue =>({
        //     field: issue.path[0],
        //     message: issue.message
        // }))
        // console.log(error)
        const error = [
        {
            "field": "username",
            "message": "The name is already used"
        },
        {
            "field": "email",
            "message": "The email is already used"
        }
    ]
        return res.status(400).json({error})
    }

    return res.status(200).json({"message": "success"})
}

export { signupController }