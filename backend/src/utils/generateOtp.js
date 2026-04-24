import { generateSecret, generate, verify } from "otplib";

const secret = generateSecret();

const generateOTP = async () => {
    try {
        console.log("sending otp :", secret)
        const token = await generate({ 
            secret: secret,
            digits: 4,
            period: 60,
        });
        console.log("Token:", token);
        return token 
    } catch (error) {
        console.log(error)
        return null
    }
}

const verifyOtp = async (token) => {
    try {
        console.log("verify otp",token)
        console.log("secret", secret)
        const result = await verify({ 
            secret: secret,
            digits: 4,
            token: token,
         });
        console.log("Valid:", result);
 
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}

export { generateOTP, verifyOtp }