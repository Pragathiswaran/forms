import {Router} from 'express'
import { signupController } from './auth.controller.js'

const route = Router()

route.post('/auth/signup',signupController)

export default route