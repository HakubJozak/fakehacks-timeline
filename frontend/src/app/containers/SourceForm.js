import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import SourceForm from '../components/SourceForm';

import { formActions, sourceActions } from '../actions/actions';

const formId = 'sourceForm';

export default compose(
    connect(
        (state) => {
            return ({
                initialValues: {},
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
    })
)(SourceForm);
