import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import isImage from 'is-image';
import _ from 'lodash';

import SourceForm from '../components/SourceForm';

import { formActions, sourceActions } from '../actions/actions';

const formId = 'sourceForm';

export default compose(
    connect(
        (state) => {
            let inputValue = _.get(state, ['form', formId, 'values', 'url']);
            inputValue = inputValue && inputValue.split('/');
            inputValue = inputValue && inputValue[inputValue.length - 1];

            return ({
                initialValues: {
                    url: state.source.defaultUrl,
                },
                error: state.source.error,
                isImage: Boolean(inputValue && isImage(inputValue)),
            });
        },
        (dispatch) => ({
            onSubmit: bindActionCreators(
                formActions.submitForm(formId, sourceActions.submitUrl),
                dispatch,
            ),
        }),
    ),
    reduxForm({
        form: formId,
        enableReinitialize: true,
    })
)(SourceForm);
