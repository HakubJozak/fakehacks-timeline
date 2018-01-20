import types from './actionTypes';

export const submitForm = (form, submitActionCreator) => data => ({
    type: types.forms.FORM_SUBMIT,
    data,
    form,
    submitActionCreator,
});
