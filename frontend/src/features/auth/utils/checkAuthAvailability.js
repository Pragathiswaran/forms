import { authApiCheckAvailablity } from '../api/authApi.js'
import {toFirstUpperCase} from '../../../utils/helper.js'

const checkAuthAvailability = async (field, value) => {
    const response = await authApiCheckAvailablity(field, value)
    if(response.status === 200 && response.data?.availability === false){
        return `${toFirstUpperCase(field)} is already taken`
    }
    return
}

export default checkAuthAvailability