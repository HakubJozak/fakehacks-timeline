import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Spin from 'antd/lib/spin';
import './Loader.scss';

export const Loader = ({ children, show, text }) => (
    <div className={classnames('Loader', { 'Loader--visible': show })}>
        {show && (
            <div className="Loader-inner">
                <Spin tip={text} />
            </div>
        )}
        {children}
    </div>
);

Loader.propTypes = {
    children: PropTypes.shape().isRequired,
    show: PropTypes.bool.isRequired,
    text: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]).isRequired,
};

export default Loader;
