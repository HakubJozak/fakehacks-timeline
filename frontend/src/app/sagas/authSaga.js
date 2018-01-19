import * as ReduxAuth from 'redux-token-auth';

import { all, takeEvery, put, take } from 'redux-saga/effects';
import { get } from 'lodash';
import { startSubmit, stopSubmit } from 'redux-form';
import ApiAgent from 'ackee-api-agent';
import AuthApiAgent from 'ackee-auth-api-agent';

import actionTypes from '../actions/actionTypes';
import config from '../config/config';

import { runSagas } from './helpers';
import { setTokens, clearTokens } from '../utilities/auth';

const api = new ApiAgent(config.api.base);
const authApi = new AuthApiAgent(config.api.base);

const authenticate = (data) => {
    return api.get(config.api.signin, {
        qs: {
            email: data.email,
            password: data.password,
        },
    }).then(({ credentials, user }) => ({
        tokens: credentials,
        user,
    }));
};

const refreshTokens = (data) => {
    const refreshToken = get(data, 'refreshToken');
    const token = get(refreshToken, 'token');
    return api.post(config.api.refresh, null, {
        qs: {
            token,
        },
    }).then(({ credentials }) => {
        const { accessToken } = credentials;
        return ({
            accessToken,
            refreshToken,
        });
    });
};

ReduxAuth.configure({
    authenticate,
    refreshTokens,
});

function* handleLoginForm(action) {
    const { data } = action;
    yield action.startSubmit();
    yield put(ReduxAuth.login(data));
    const res = yield take([
        ReduxAuth.AUTH_LOGIN_SUCCESS,
        ReduxAuth.AUTH_LOGIN_FAILURE,
    ]);
    if (res.type === ReduxAuth.AUTH_LOGIN_SUCCESS) {
        yield action.stopSubmit();
    } else {
        yield action.stopSubmit({
            _error: 'login.error',
        });
    }
}

function storeAuthTokens(action) {
    const { tokens } = action;
    setTokens(tokens);
}

function* getUser() {
    yield put(startSubmit(config.forms.login));
    try {
        const user = yield authApi.get(config.api.me);
        yield put(ReduxAuth.stopLogin(null, user));
    } catch (e) {
        yield put(ReduxAuth.stopLogin(e));
    } finally {
        yield put(stopSubmit(config.forms.login));
    }
}

const handlers = {
    [actionTypes.auth.REQUEST_USER]: getUser,
};

export default function* () {
    yield all([
        runSagas(handlers),
        takeEvery(actionTypes.auth.LOGIN_FORM, handleLoginForm),
        takeEvery(ReduxAuth.SET_AUTH_TOKENS, storeAuthTokens),
        takeEvery(ReduxAuth.AUTH_LOGOUT, clearTokens),
        ReduxAuth.saga(),
    ]);
}
