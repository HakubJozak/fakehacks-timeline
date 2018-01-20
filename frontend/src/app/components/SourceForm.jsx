import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Icon from 'antd/lib/icon';

import Input from './FormFields/Input';
import Notification from '../containers/Notification';
import './SourceForm.scss';

class SourceForm extends React.Component {
    componentDidMount() {
        this.input.getRenderedComponent().selectInputContent();
    }

    render() {
        return (
            <form className="SourceForm" onSubmit={this.props.handleSubmit}>
                { this.error && <Notification text="Fetching data failed, try it again (same url is prefilled)." /> }
                <Field
                    ref={input => { this.input = input; }}
                    id="url"
                    name="url"
                    component={Input}
                    type="text"
                    label={'Check this url'}
                    withLabel
                    withRef
                />
                <button className="ant-btn ant-btn-primary" type="submit">
                    Check {this.props.isImage && <Icon type="picture" style={{ fontSize: 18 }} />}
                </button>

            </form>
        );
    }
};

SourceForm.propTypes = {
    error: PropTypes.bool,
    isImage: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default SourceForm;

