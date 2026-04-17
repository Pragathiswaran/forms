import bcrypt from 'bcrypt'

const hashPassword = async (password) => {
    try{
        const salt = 10
        const hasedPassword  = await bcrypt.hash(password, salt)

        console.log("Encrypted the password")
        return hasedPassword 
    }catch(err){
        console.log(err)
        throw err
    }
}

const comparePassword = async (pass, hashPass) => {
    try{
        return await bcrypt.compare(pass, hashPass);
    } catch (err) {
        console.log(err)
        throw err
    }
}

export { hashPassword, comparePassword }