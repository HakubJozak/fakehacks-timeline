import { takeEvery, put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

function* redirect(_action) {
    switch (_action.type) {
    }
}

export default function* () {
    yield takeEvery('*', redirect);
}
