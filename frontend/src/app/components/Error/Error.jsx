import React from 'react';
import PropTypes from 'prop-types';

const SimpleErrorComponent = ({ error }) => (
    <div>
        Error occured!:
        <code>{error.message}</code>
    </div>
);

SimpleErrorComponent.propTypes = {
    error: PropTypes.shape().isRequired,
};

export default SimpleErrorComponent;
