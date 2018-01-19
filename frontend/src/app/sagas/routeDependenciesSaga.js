import * as ReduxAuth from 'redux-token-auth';
import _ from 'lodash';

import { all, takeEvery, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { runRouteDependencies } from './helpers';
import actions from '../actions/actions';

export function* appSaga() {
    console.log('app saga started');
}

export const handlers = {
    '/': appSaga,
};

export default function* () {
    yield all([
        takeEvery(LOCATION_CHANGE, runRouteDependencies, handlers),
        takeEvery(ReduxAuth.AUTH_LOGIN_SUCCESS, runRouteDependencies, handlers),
    ]);
}
