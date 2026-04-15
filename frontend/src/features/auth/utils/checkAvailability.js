import { authApiCheckAvailablity } from '../api/authApi.js'

const checkAvailability = async (field, value) => {
    const response = await authApiCheckAvailablity(field, value)
    console.log(response)
    if(!response.status === "200"){
        return `${field} is already taken`
    }
    return undefined
}

export default checkAvailability