import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'antd/lib/icon';

import './Resource.scss';

const getType = (source) => {
    const { trust } = source;

    if (trust > 0) {
        return 'trusted';
    }

    if (trust < 0) {
        return 'untrusted';
    }

    return 'neutral';
};

const TrustIcon = ({ type }) => {
    if (type === 'trusted') {
        return <Icon type="check-circle-o" />;
    }

    if (type === 'untrusted') {
        return <Icon type="exclamation-circle-o" />;
    }

    return <Icon type="question-circle-o" />;
};

TrustIcon.propTypes = {
    source: PropTypes.shape({
        domain: PropTypes.string.isRequired,
        trust: PropTypes.number,
    }).isRequired,
};

TrustIcon.defaultProps = {
    source: null,
};

const Resource = ({ url, source }) => {
    const type = getType(source);

    return (
        <div className={`Resource Resource--${type}`}>
            <TrustIcon type={type} />
            <a target="_blank" href={url}>{url}</a>
        </div>
    );
};

Resource.propTypes = {
    date: PropTypes.string,
    url: PropTypes.string.isRequired,
    ...TrustIcon.propTypes,
};

Resource.defaultProps = {
    date: null,
};

export default Resource;
