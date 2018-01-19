import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Button from 'antd/lib/button';

import Input from './FormFields/Input';
import './source-form.scss';

const SourceForm = ({ handleSubmit }) => {
    return (
        <form className="source-form" onSubmit={handleSubmit}>
            <Field
                id="url"
                name="url"
                component={Input}
                type="text"
                label={'Check this url'}
                withLabel
            />
            <button className="ant-btn ant-btn-primary" type="submit">Check</button>

        </form>
    );
};

SourceForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default SourceForm;

