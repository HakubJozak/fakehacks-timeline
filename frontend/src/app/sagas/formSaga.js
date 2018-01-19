import { takeEvery, put, select } from 'redux-saga/effects';
import { getFormValues, getFormInitialValues, reset, startSubmit, stopSubmit } from 'redux-form';
import types from '../actions/actionTypes';

function* handleGeneralFormSubmit(action) {
    const { submitActionCreator, form } = action;
    const data = yield select(getFormValues(form));
    const initialData = yield select(getFormInitialValues(form));

    function* start() {
        yield put(startSubmit(form));
    }

    function* stop(errors) {
        yield put(stopSubmit(form, errors));
    }

    function* res() {
        yield put(reset(form));
    }

    if (submitActionCreator) {
        yield put(
            {
                ...submitActionCreator(),
                data,
                form,
                initialData,
                reset: res,
                startSubmit: start,
                stopSubmit: stop,
            },
        );
    }
}

export default function* () {
    yield takeEvery(types.forms.FORM_SUBMIT, handleGeneralFormSubmit);
}
