import app from './src/app.js'

const port = process.env.PORT;

app.listen(port,() => {
    console.log(`The server is running on the port ${port}`)
})