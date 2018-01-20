import React from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';

const Notification = ({ text, type, onClose }) => {
    return (
        <div className={`Notification Notification--${type}`}>
            {text}
            <Button type="primary" size="small" onClick={onClose}>
                Close
            </Button>
        </div>
    );
};

Notification.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};

Notification.defaultProps = {
    text: '',
    type: 'error',
};

export default Notification;
