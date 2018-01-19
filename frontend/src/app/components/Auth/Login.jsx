import React from 'react';

import { PropTypes } from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import LoginForm from './LoginForm';

const Login = ({ handleSubmit, intl }) => (
    <div>
        <LoginForm
            onSubmit={handleSubmit}
        />
    </div>
);

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    intl: PropTypes.shape({
        formatMessage: PropTypes.func,
    }).isRequired,
};

export default injectIntl(Login);
