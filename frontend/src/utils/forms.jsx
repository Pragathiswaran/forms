import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'

const signupForm =[ {
        field: 'name',
        type: 'text',
        logo: <FontAwesomeIcon icon={faUser} className='input-logo'/>
    }, {
        field: 'email',
        type: 'text',
        logo: <FontAwesomeIcon icon={faEnvelope} className='input-logo'/>
    },{
        field: 'password',
        type: 'password',
        logo: <FontAwesomeIcon icon={faLock} className='input-logo'/>
}];

const loginForm = [
    {
        field: 'name',
        type: 'text',
        logo: <FontAwesomeIcon icon={faUser} className='input-logo'/>
    },{
        field: 'password',
        type: 'password',
        logo: <FontAwesomeIcon icon={faLock} className='input-logo'/>
    }
]

export {signupForm, loginForm}