import { push } from 'react-router-redux'

import { put, select } from 'redux-saga/effects';
import _ from 'lodash';

import actionTypes from '../actions/actionTypes';
import actions from '../actions/actions';
import { checkUrlSelector } from '../selectors';

import { runSagas } from './helpers';
import { tryUrlAgain, urlSubmitted } from '../actions/sourceActions';

function* handleSubmitUrl(action) {
    let { data: { url } } = action;

    yield put(push({
        pathname: '/timeline',
        search: `?url=${url}`,
    }));
    yield put(urlSubmitted());
}

function* handleFetchTimelineFail(error) {
    const url = yield select(checkUrlSelector);

    yield put(tryUrlAgain(url));
    yield put(push({ pathname: '/' }));
}

const handlers = {
    [actionTypes.source.SUBMIT_URL]: handleSubmitUrl,
    [actionTypes.sources.REQUEST_TIMELINE_FAILED]: handleFetchTimelineFail,
};

export default function* () {
    return yield runSagas(handlers);
}
