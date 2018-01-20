import React from 'react';

const mockField = ({
    input,
    label,
    type,
    hint,
    disabled,
    meta: { touched, error },
}) => (
    <div>
        <label>{label}</label>
        <input {...input} disabled={disabled} placeholder={hint} type={type} />
        {touched && error && <span>{error}</span>}
    </div>
);

export default mockField;
