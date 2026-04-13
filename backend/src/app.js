import express from 'express'
import cors from 'cors'
import route from './api/auth/auth.route.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', route)
app.get('/',(req, res) => {
    res.send("Hello world!!!")
})

export default app