import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
}, { timestamps: true })

export const SignupModel = mongoose.model("auths",signupSchema) 