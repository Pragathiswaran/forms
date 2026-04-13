import app from './src/app.js'

const port = 3000;

app.listen(port,() => {
    console.log(`The server is running on the port ${port}`)
})