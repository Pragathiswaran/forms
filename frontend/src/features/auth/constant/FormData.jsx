import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'

const signupFormData =[ {
        field: 'username',
        type: 'text',
        logo: <FontAwesomeIcon icon={faUser} />,
        hasOnchange: true
    }, {
        field: 'email',
        type: 'text',
        logo: <FontAwesomeIcon icon={faEnvelope} />,
        hasOnchange: true
    },{
        field: 'password',
        type: 'password',
        logo: <FontAwesomeIcon icon={faLock} />,
        hasOnchange: false
}];

const loginFormData = [
    {
        field: 'username',
        type: 'text',
        logo: <FontAwesomeIcon icon={faUser} />
    },{
        field: 'password',
        type: 'password',
        logo: <FontAwesomeIcon icon={faLock} />
    }
]

export {signupFormData, loginFormData}