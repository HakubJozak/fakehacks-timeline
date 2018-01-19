import { push } from 'react-router-redux'

import { put, select } from 'redux-saga/effects';
import _ from 'lodash';

import actionTypes from '../actions/actionTypes';
import actions from '../actions/actions';
//import {  } from '../selectors';

import { runSagas } from './helpers';

function* handleSubmitUrl(action) {
    let { data: { url } } = action;

    yield put(push({
        pathname: '/timeline',
        search: `?url=${url}`,
    }));
}

const handlers = {
    [actionTypes.source.SUBMIT_URL]: handleSubmitUrl,
};

export default function* () {
    return yield runSagas(handlers);
}
