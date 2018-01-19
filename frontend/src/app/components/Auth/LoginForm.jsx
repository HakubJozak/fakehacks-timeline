import React from 'react';

import { compose } from 'recompose';
import { PropTypes } from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Form, Field, reduxForm } from 'redux-form';

import Input from '../FormFields/Input';
import config from '../../config/config';

const texts = {
    tip: <FormattedMessage id="login.tip" />,
    button: <FormattedMessage id="login.button" />,
    error: (error) => (
        <div className="form__error">
            <FormattedMessage id={error} />
        </div>
    ),
};

const validate = (values = {}) => {
    const errors = {};

    // required
    if (!values.email) {
        errors.email = 'password email';
    }
    if (!values.password) {
        errors.password = 'password error';
    }

    return errors;
};

const LoginForm = ({ handleSubmit, error, intl, submitting }) => (
    <Form onSubmit={handleSubmit}>
        <Field
            disabled={submitting}
            id="email"
            name="email"
            component={Input}
            type="text"
            label={intl.formatMessage({ id: 'login.email' })}
            withLabel
        />
        <Field
            disabled={submitting}
            id="password"
            name="password"
            component={Input}
            type="password"
            label={intl.formatMessage({ id: 'login.password' })}
            withLabel
        />
        <button
            type="submit"
            disabled={submitting}
        >
            Přihlásit
        </button>
    </Form>
);

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    intl: PropTypes.shape({
        formatMessage: PropTypes.func,
    }).isRequired,
    submitting: PropTypes.bool.isRequired,
};

LoginForm.defaultProps = {
    error: null,
};

export default compose(
    reduxForm({
        form: config.forms.login,
        validate,
    }),
    injectIntl,
)(LoginForm);
