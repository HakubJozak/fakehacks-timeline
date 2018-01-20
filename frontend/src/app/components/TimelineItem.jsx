import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate, FormattedTime } from 'react-intl';

import Timeline from 'antd/lib/timeline';
import Icon from 'antd/lib/icon';

const getDot = (source) => {
    if (!source) {
        return undefined;
    }

    const { trust } = source;

    if (trust > 0) {
        return <Icon type="check-circle-o" />;
    }

    if (trust < 0) {
        return <Icon type="exclamation-circle-o" />;
    }

    return undefined;
};

const TimelineItem = ({ date, url, source }) => {
    const dot = getDot(source);

    return (
        <Timeline.Item dot={dot} color={dot ? undefined : 'grey'}>
            <FormattedDate value={date} /><br />
            <a target="_blank" href={url}>{url}</a>
        </Timeline.Item>
    );
};

TimelineItem.propTypes = {
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    source: PropTypes.shape({
        domain: PropTypes.string.isRequired,
        trust: PropTypes.number.isRequired,
    }),
};

TimelineItem.defaultProps = {
    source: null,
};

export default TimelineItem;
