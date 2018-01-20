import ApiAgent from 'ackee-api-agent';
import { push } from 'react-router-redux';

import { put, select } from 'redux-saga/effects';
import _ from 'lodash';

import actionTypes from '../actions/actionTypes';
import actions from '../actions/actions';
import { checkUrlSelector } from '../selectors';

import { runSagas } from './helpers';

const api = new ApiAgent('http://bd216ac6.ngrok.io');

function* getTimeline() {
    try {
        const checkUrl = yield select(checkUrlSelector);
        const timeline = yield api.get('/checks', {
            qs: {
                url: checkUrl,
            },
        });
        yield put(actions.timeline.setTimeline(timeline));
    } catch (e) {
        console.warn(e);
    }
}

const handlers = {
    [actionTypes.timeline.REQUEST_TIMELINE]: getTimeline,
};

export default function* () {
    return yield runSagas(handlers);
}
