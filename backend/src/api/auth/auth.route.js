import {Router} from 'express'
import { signupController, loginController, checkAvailController, forgetPasswordController } from './auth.controller.js'

const route = Router()

route.post('/auth/signup',signupController)
route.post('/auth/login',loginController )
route.post('/auth/check-avail',checkAvailController )
route.post('/auth/login/forgetpass',forgetPasswordController)

export default route