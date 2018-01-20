import ApiAgent from 'ackee-api-agent';
import _ from 'lodash';

import { all, takeEvery, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { runRouteDependencies } from './helpers';
import actions from '../actions/actions';

export function* appSaga() {
}

export function* timelineSaga() {
    yield put(actions.timeline.requestTimeline());
    yield put(actions.sources.requestSources());
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
