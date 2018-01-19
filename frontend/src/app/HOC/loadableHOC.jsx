import React from 'react';
import PropTypes from 'prop-types';

import loadableFactory from 'ackee-frontend-toolkit/lib/HOC/loadable';

const SimpleLoader = ({ children, showLoader, text }) => (
    <div>
        {children}
        {
            showLoader && (
                <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, background: 'grey' }}>
                    {text}
                </div>
            )
        }
    </div>
);

SimpleLoader.propTypes = {
    children: PropTypes.shape().isRequired,
    showLoader: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default loadableFactory(SimpleLoader);

