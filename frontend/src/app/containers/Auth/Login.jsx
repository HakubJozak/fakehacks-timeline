import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isLoggingIn } from 'redux-token-auth';

import Login from '../../components/Auth/Login';
import loadable from '../../HOC/loadableHOC';
import config from '../../config/config';

import { authActions, formActions } from '../../actions/actions';

export default connect(
    (state) => {
        return ({
            showLoader: isLoggingIn(state),
        });
    },
    (dispatch) => ({
        actions: bindActionCreators(authActions, dispatch),
        handleSubmit: bindActionCreators(
            formActions.submitForm(
                config.forms.login,
                authActions.loginForm,
            ),
            dispatch,
        ),
    }),
)(Login
);
