import types from './actionTypes';

export function clearLoginError() {
    return {
        type: types.error.CLEAR_LOGIN_ERROR,
    };
}

export function clearRegistrationError() {
    return {
        type: types.error.CLEAR_REGISTRATION_ERROR,
    };
}
