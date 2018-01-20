import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';

import Timeline from 'antd/lib/timeline';

const TimelineItem = ({ date, url, source }) => {
    return (
        <Timeline.Item>
            <FormattedDate value={date} /> <a href={url}>{url}</a>
        </Timeline.Item>
    );
};

TimelineItem.propTypes = {
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    source: PropTypes.shape({
        domain: PropTypes.string.isRequired,
        trust: PropTypes.number.isRequired,
    }).isRequired,
};

export default TimelineItem;
