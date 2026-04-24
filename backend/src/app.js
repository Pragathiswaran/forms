import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import route from './api/auth/auth.route.js'
import connectDB from './models/db.model.js'
import emailServer from './services/email/emailServer.js'

const app = express()

app.use(cors())
app.use(express.json())
// dotenv.config()
connectDB()
app.use('/', route)

emailServer.verify()
   .then(() => console.log("✅ SMTP server connected successfully..."))
  .catch(err => console.error("❌ SMTP error:", err.message))

app.get('/',(req, res) => { res.send("Hello world!!!") })

export default app