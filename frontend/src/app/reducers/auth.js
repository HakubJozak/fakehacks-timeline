import _ from 'lodash';

import types from '../actions/actionTypes';

const LocalStorageHandlers = {
    saveTokens: (credentials) => {
        localStorage.setItem('access_token', JSON.stringify(credentials.accessToken));
        if (credentials.refreshToken) {
            localStorage.setItem('refresh_token', JSON.stringify(credentials.refreshToken));
        }
    },
    loadTokens: () => ({
        accessToken: JSON.parse(localStorage.getItem('access_token')),
        refreshToken: JSON.parse(localStorage.getItem('refresh_token')),
    }),
    deleteTokens: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    },
};

const initialState = {
    user: null, // current user data obtained from login
    isAuthenticated: false,
    credentials: null, // {Object} keyed with [acces_token, refresh_token] with String values of tokens
    refreshing: false, // whether refreshing credentials using refresh token is needed
    isFetching: false, // fetching flag
    isFetchingConfirmation: false,
    confirmationState: 'pending',
};

export default function(state = initialState, action) {
    switch (action.type) {
    // Call requests for sign in
        case types.auth.REQUEST_SIGN_IN:
            return {
                ...state,
                isFetching: true,
            };
            // Set authentification data to store
        case types.auth.SIGN_IN:
            LocalStorageHandlers.saveTokens(action.credentials);
            return {
                ...state,
                ..._.omit(action, ['type']),
                isAuthenticated: true,
                isFetching: false,
            };
            // Reset state to initial
        case types.auth.SIGN_IN_FAILED:
            return {
                ...initialState,
            };
            // Clear authentification data without locale
        case types.auth.SIGN_OUT:
            LocalStorageHandlers.deleteTokens();
            return {
                ...initialState,
                //          localLocale: state.localLocale,
            };
            // Load tokens from localStorage
        case types.auth.LOAD_LOCAL_TOKENS:
            return {
                ...state,
                credentials: LocalStorageHandlers.loadTokens(),
            };
            // Save foreign
        case types.auth.SAVE_FOREIGN_REFRESH_TOKEN:
            return {
                ...state,
                credentials: {
                    refreshToken: action.refreshToken,
                },
            };
            // Special type of request (has own saga -> refreshTokenSaga)
        case types.auth.REFRESH_TOKEN:
            return {
                ...state,
                isFetching: true,
                refreshing: true,
            };
            // Update user and credentials after refresh token and unpause all requests (authSaga)
        case types.auth.UPDATE_AUTH_DATA:
            LocalStorageHandlers.saveTokens(action.credentials);
            return {
                ...state,
                ..._.omit(action, ['type']),
                isAuthenticated: true,
                isFetching: false,
                refreshing: false,
            };
        default:
            return state;
    }
}
