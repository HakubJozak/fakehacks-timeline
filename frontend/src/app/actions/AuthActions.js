import actionTypes from './actionTypes';

export { login, logout } from 'redux-token-auth';

export function loginForm() {
    return ({
        type: actionTypes.auth.LOGIN_FORM,
    });
}

export function requestUser() {
    return ({
        type: actionTypes.auth.REQUEST_USER,
    });
}
