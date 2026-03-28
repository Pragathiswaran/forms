import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'

const signupForm =[ {
        field: 'Name',
        type: 'text',
        logo: <FontAwesomeIcon icon={faUser} className='input-logo'/>
    }, {
        field: 'Email',
        type: 'text',
        logo: <FontAwesomeIcon icon={faEnvelope} className='input-logo'/>
    },{
        field: 'Password',
        type: 'password',
        logo: <FontAwesomeIcon icon={faLock} className='input-logo'/>
}];

const loginForm = [
    {
        field: 'Name',
        type: 'text',
        logo: <FontAwesomeIcon icon={faUser} className='input-logo'/>
    },{
        field: 'Password',
        type: 'password',
        logo: <FontAwesomeIcon icon={faLock} className='input-logo'/>
    }
]

export {signupForm, loginForm}