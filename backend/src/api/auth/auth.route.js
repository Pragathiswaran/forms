import {Router} from 'express'
import { signupController, loginController, checkAvailController, 
    forgetPasswordController, verificationController } from './auth.controller.js'

const route = Router()

route.post('/auth/signup',signupController)
route.post('/auth/login',loginController )
route.post('/auth/check-avail',checkAvailController )
route.post('/auth/login/forgetpass',forgetPasswordController)
route.post('/auth/login/verify', verificationController)

export default route