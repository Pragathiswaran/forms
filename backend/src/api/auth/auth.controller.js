import { SignupSchema, LoginSchema } from './auth.validator.js'
import { SignupModel } from '../../models/auth.model.js'
import { hashPassword, comparePassword } from '../../utils/hashPassword.js'

const signupController = async (req, res) => {
    try{
        const {username, email, password} = req.body

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
            return res.status(400).json({error})
        }

        const userExists = await SignupModel.findOne({username})

        if(userExists){
            return res.status(400).json({"message": "User is already exist"})
        }

        const hasedPassword = await hashPassword(password)
        if(!hasedPassword){
            console.log("after", hasedPassword)
            return res.status(400).json({"message": "Something went wrong during encrypting the password"})
        }

        const creatUser = await SignupModel.create({ username, email, password: hasedPassword})
        if(!creatUser){
            res.status(400).json({"message":"Something went wrong while creating the user"})
        }

        return res.status(200).json({"message": "The user has been registered successfully"})
    } catch (err) {
        console.log("Error :", err)
        return res.status(500).json({ message: "Server error" });
    }
}

const loginController = async (req, res) => {
    try{
        const { username, password } = req.body

        const loginValidator = LoginSchema.safeParse({
            username: username, 
            password: password
        })

        if(!loginValidator.success){
            const error = loginValidator.error?.issues.map(issue =>({
                field: issue.path[0],
                message: issue.message
            }))
            return res.status(400).json({error})
        }

        const user = await SignupModel.findOne({username})
    
        if(!user){
            return res.status(400).json({"message": "User is not exist"})
        }

        const comparedPassword = await comparePassword(password, user.password)

        if(!comparedPassword){
            return res.status(400).json({"message": "Incorrect Password"})
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

export { signupController, checkAvailController, loginController }