import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
     } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
}

export  const loginUser = ({ email, passWord }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER})
        firebase.auth().signInWithEmailAndPassword(email, passWord)
            .then(user => {
                console.log("passed");
                loginUserSuccess(dispatch, user);
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,passWord)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFailed(dispatch))    
            });
      };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
};

const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED
    });
};