import express from 'express'
import cors from 'cors'
import route from './api/auth/auth.route.js'
import connectDB from './models/db.model.js'
import dotenv from 'dotenv' 

const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()
connectDB()
app.use('/', route)
app.get('/',(req, res) => { res.send("Hello world!!!") })

export default app