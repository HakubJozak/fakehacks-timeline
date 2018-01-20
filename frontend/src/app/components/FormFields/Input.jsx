import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Input from 'antd/lib/input';

// eslint-disable-next-line react/prefer-stateless-function
class InputField extends React.Component {
    selectInputContent = () => {
        const input = this.input.refs.input;

        input.focus();
        input.setSelectionRange(0, input.value.length);
    }

    render() {
        const {
            input,
            label,
            id,
            disabled,
            meta: { error, touched },
            type,
            withLabel,
            style,
            small,
        } = this.props;

        return (
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
                    ref={n => { this.input = n; }}
                    {...input}
                />
            </div>
        );
    }
}

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
