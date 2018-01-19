import _ from 'lodash';

import types from '../actions/actionTypes';

const initialState = {
    login: null,
    registration: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.auth.SIGN_IN_FAILED:
            return {
                ...state,
                login: 'Bad email or password.',
            };
        case types.auth.SIGN_UP_FAILED:
            return {
                ...state,
                registration: 'This email has been already registered.',
            };
        case types.error.CLEAR_LOGIN_ERROR:
            return {
                ...state,
                login: null,
            };
        case types.error.CLEAR_REGISTRATION_ERROR:
            return {
                ...state,
                registration: null,
            };
        default:
            return state;
    }
}
