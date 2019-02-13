import { EMAIL_CHANGED } from '../actions/types';
import { PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    passWord: '',
    user: null,
    error: '',
    loading: false 
};

export default ( state = INITIAL_STATE, action ) => {
    console.log(action);
    switch ( action.type ) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, passWord: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: '', loading: false };
        case LOGIN_USER_FAILED:
            return { ...state, error: 'Authentication Failed.', passWord: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '', passWord: '' };
        default:
            return state;
    }
};