import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Input from 'antd/lib/input';

const InputField = ({
    input,
    label,
    id,
    disabled,
    meta: { error, touched },
    type,
    withLabel,
    style,
    small,
}) => (
    <div
        className={classnames(
            'form-input',
            {
                'form-input--error': touched && error,
                'form-input--small': small,
            }
        )}
    >
        {
            withLabel && <label className="form-label" htmlFor={id}>{label}</label>
        }
        <Input
            id={id}
            disabled={disabled}
            placeholder={!withLabel ? label : null}
            type={type}
            style={style}
            {...input}
        />
    </div>
);

InputField.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    // eslint-disable-next-line
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.shape({
        error: PropTypes.string,
        touched: PropTypes.bool,
    }).isRequired,
    type: PropTypes.string.isRequired,
    withLabel: PropTypes.bool,
    // Reason: it's general style object with very varying shape
    // eslint-disable-next-line
    style: PropTypes.object,
    small: PropTypes.bool,
};

InputField.defaultProps = {
    disabled: false,
    withLabel: false,
    style: {},
    small: false,
};

export default InputField;
