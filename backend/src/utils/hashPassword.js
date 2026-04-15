import bcrypt from 'bcrypt'

const hashPassword = (password) => {
    const salt = 10
    const hased  = bcrypt.hash(password, salt)

    console.log("hased", hased)
    return hased 
}

const comparePassword = (pass, hashPass) => {
    const comparePass = bcrypt.compare(pass, hashPass);
    console.log("comparePass", comparePass)
    return comparePass
}

export { hashPassword, comparePassword }