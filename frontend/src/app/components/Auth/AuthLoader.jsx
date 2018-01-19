import React from 'react';

import { PropTypes } from 'prop-types';
import { injectIntl } from 'react-intl';

const Login = ({ intl }) => (
    <h1>
        Auth Loading
    </h1>
);

Login.propTypes = {
    intl: PropTypes.shape({
        formatMessage: PropTypes.func,
    }).isRequired,
};

export default injectIntl(Login);
