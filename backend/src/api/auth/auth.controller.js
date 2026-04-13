const signupController = (req, res) => {
    const {username, email, password} = req.body

    if(!username){
        return res.status(400).json({"message":"Username is empty"})
    }

    if(!email){
        return res.status(400).json({"message":"Email is empty"})
    }

    if(!password){
        return res.status(400).json({"message":"Password is empty"})
    }

    console.log(req.body)
    return res.status(200).json({"status": 200, "message":"success"})
}

export { signupController }