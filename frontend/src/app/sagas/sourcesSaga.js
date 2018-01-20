import ApiAgent from 'ackee-api-agent';
import { push } from 'react-router-redux';

import { put, select } from 'redux-saga/effects';
import _ from 'lodash';

import actionTypes from '../actions/actionTypes';
import actions from '../actions/actions';
import { checkUrlSelector } from '../selectors';

import { runSagas } from './helpers';

const api = new ApiAgent('http://bd216ac6.ngrok.io');

function* getSources() {
    try {
        const sources = yield api.get('/sources.json');

        yield put(actions.sources.setSources(sources));
    } catch (e) {
        console.warn(e);
    }
}

const handlers = {
    [actionTypes.sources.REQUEST_SOURCES]: getSources,
};

export default function* () {
    return yield runSagas(handlers);
}
