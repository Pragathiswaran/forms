import { SignupSchema, LoginSchema, forgetPasswordSchema } from './auth.validator.js'
import { SignupModel } from '../../models/auth.model.js'
import { hashPassword, comparePassword } from '../../utils/hashPassword.js'

const signupController = async (req, res) => {
    try{
        const {username, email, password} = req.body

        const validateUser = SignupSchema.safeParse(req.body)

        if (!validateUser.success){
            const error = validateUser.error?.issues.map(issue =>({
                field: issue.path[0],
                message: issue.message
            }))
            return res.status(400).json({error})
        }

        const userExists = await SignupModel.findOne({username})

        if(userExists){
            return res.status(409).json({"message": "User is already exist"})
        }

        const hashedPassword = await hashPassword(password)
        if(!hashedPassword){
            console.log("after", hashedPassword)
            return res.status(400).json({"message": "Something went wrong during encrypting the password"})
        }

        const createdUser = await SignupModel.create({ username, email, password: hashedPassword})
        if(!createdUser){
            return res.status(400).json({"message":"Something went wrong while creating the user"})
        }

        return res.status(201).json({"message": "The user has been registered successfully"})
    } catch (err) {
        console.log("Error :", err)
        return res.status(500).json({ message: "Server error" });
    }
}

const loginController = async (req, res) => {
    try{
        const { username, password } = req.body

        const loginValidator = LoginSchema.safeParse(req.body)

        if(!loginValidator.success){
            const error = loginValidator.error?.issues.map(issue =>({
                field: issue.path[0],
                message: issue.message
            }))
            return res.status(400).json({error})
        } 

        const user = await SignupModel.findOne({username})
    
        if(!user){
            return res.status(404).json({"message": "Incorrect username or password"})
        }

        const comparedPassword = await comparePassword(password, user.password)

        if(!comparedPassword){
            return res.status(401).json({"message": "Incorrect username or password"})
        }

        return res.status(200).json({"message": "User login successfully"})

    } catch(err){
        console.log("Error :", err)
        return res.status(500).json({ message: "Server error" });
    }
}

const checkAvailController = async (req, res) => {
    try {
        const { field, value } = req.body;

        const allowedFields = ["username", "email"];

        if (!allowedFields.includes(field)) {
            return res.status(400).json({message: "Invalid field"});
        }

        const exists = await SignupModel.exists({ [field]: value });

        if (exists) {
            return res.status(200).json({ availability: false, message: `${field} is already taken` });
        }

        return res.status(200).json({ availability: true, message: `${field} is available` });

    } catch (error) {
        console.error("Error",error);
        return res.status(500).json({ message: "Server error" });
    }
};

const forgetPasswordController = async (req, res) =>{
    try{
        const { email } = req.body

        const emailValidator = forgetPasswordSchema.safeParse({email})

        if(!emailValidator.success){
            console.log('email is invalid')
            const error = emailValidator.error?.issues.map(issue =>({
                field: issue.path[0],
                message: issue.message
            }))
            console.log(error)
            return res.status(400).json({error})
        }

        const isEmailExists = await SignupModel.exists({['email']: email})

        if(!isEmailExists){
            return res.status(404).json({'message': 'The give email is invalid'})
        }

        return res.status(200).json({'message':'Otp is send to the given email'})

    } catch (err){
        console.log(err)
        return res.status(500).json({'message':'server error'})
    }
}

export { signupController, checkAvailController, loginController, forgetPasswordController }