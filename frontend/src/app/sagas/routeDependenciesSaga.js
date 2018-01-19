import ApiAgent from 'ackee-api-agent';
import _ from 'lodash';

import { all, takeEvery, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { runRouteDependencies } from './helpers';
import actions from '../actions/actions';

const api = new ApiAgent('http://bd216ac6.ngrok.io');

export function* appSaga() {
}

export function* timelineSaga() {
    try {
        const sources = yield api.get('/sources.json');

        yield put(actions.sources.setSources(sources));
    } catch (e) {
        console.warn(e);
    }
}

export const handlers = {
    '/': appSaga,
    '/timeline': timelineSaga,
};

export default function* () {
    yield all([
        takeEvery(LOCATION_CHANGE, runRouteDependencies, handlers),
    ]);
}
