import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'antd/lib/icon';

import './Resource.scss';

const emptyIcon = <span className="empty" />;

const TrustIcon = ({ source }) => {
    const { trust } = source;

    if (trust > 0) {
        return <Icon type="check-circle-o" />;
    }

    if (trust < 0) {
        return <Icon type="exclamation-circle-o" />;
    }

    return <Icon type="question-circle-o" />;
    //return emptyIcon;
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
    return (
        <div className="Resource">
            <TrustIcon source={source} />
            <a target="_blank" href={url}>{url}</a>
        </div>
    );
};

Resource.propTypes = {
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    ...TrustIcon.propTypes,
};

export default Resource;
