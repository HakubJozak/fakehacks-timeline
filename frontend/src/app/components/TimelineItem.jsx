import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';

import Timeline from 'antd/lib/timeline';

const TimelineItem = ({ date, url, title }) => {
    return (
        <Timeline.Item>
            <FormattedDate value={date} /> <a href={url}>{title}</a>
        </Timeline.Item>
    );
};

TimelineItem.propTypes = {
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default TimelineItem;
