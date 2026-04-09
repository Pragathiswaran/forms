import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'

const signupFormData =[ {
        field: 'name',
        type: 'text',
        logo: <FontAwesomeIcon icon={faUser} />
    }, {
        field: 'email',
        type: 'text',
        logo: <FontAwesomeIcon icon={faEnvelope} />
    },{
        field: 'password',
        type: 'password',
        logo: <FontAwesomeIcon icon={faLock} />
}];

const loginFormData = [
    {
        field: 'name',
        type: 'text',
        logo: <FontAwesomeIcon icon={faUser} />
    },{
        field: 'password',
        type: 'password',
        logo: <FontAwesomeIcon icon={faLock} />
    }
]

export {signupFormData, loginFormData}