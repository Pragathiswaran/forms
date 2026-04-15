import {Router} from 'express'
import { signupController, checkAvailController } from './auth.controller.js'

const route = Router()

route.post('/auth/signup',signupController)

route.post('/auth/check-avail',checkAvailController )

export default route