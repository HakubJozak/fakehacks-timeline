import * as ReduxAuth from 'redux-token-auth';

import { put, take } from 'redux-saga/effects';

import { authActions, translateActions } from '../actions/actions';
import { getTokens } from '../utilities/auth';

export default function* () {
    const tokens = getTokens();
    yield put(translateActions.loadLocale());
    if (tokens) {
        yield put(ReduxAuth.setTokens(tokens));
        yield put(ReduxAuth.refreshTokens());

        yield take(ReduxAuth.SET_AUTH_TOKENS);
        yield put(authActions.requestUser());
    }
}
