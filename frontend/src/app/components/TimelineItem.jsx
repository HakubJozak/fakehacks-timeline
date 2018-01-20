import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate, FormattedTime } from 'react-intl';
import Timeline from 'antd/lib/timeline';
import Icon from 'antd/lib/icon';

import Resource from './Resource';

import './TimelineItem.scss';

const TimelineItem = ({ items }) => {
    const { date } = items[0];

    return (
        <Timeline.Item color="grey" dot={<Icon type="calendar" />} >
            <FormattedDate value={date} /><br />
            {
                items.map((resource, idx) => (
                    <Resource key={idx} {...resource} />
                ))
            }
        </Timeline.Item>
    );
};

TimelineItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(Resource.propTypes)).isRequired,
};

TimelineItem.defaultProps = {
    source: null,
};

export default TimelineItem;
