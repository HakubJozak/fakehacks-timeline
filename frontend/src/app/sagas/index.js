import { all } from 'redux-saga/effects';
// import formSaga from 'ackee-frontend-toolkit/lib/sagas/form'; TODO - connect formsaga from frontend toolkit

import auth from './authSaga';
import routeDependencies from './routeDependenciesSaga';
import formSaga from './formSaga';
import init from './initAppSaga';

import config from '../config/config';

/**
 * Root generator for all application sagas
 */
export default function* () {
    // Register sagas
    yield all([
        formSaga(),
        auth(),
        init(),
        routeDependencies(),
    ]);
}
