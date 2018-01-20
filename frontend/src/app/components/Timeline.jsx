import React from 'react';
import PropTypes from 'prop-types';

import AntdTimeline from 'antd/lib/timeline';
import { Row, Col } from 'antd/lib/grid';
import TimelineItem from './TimelineItem';

import './timeline.scss';

const Timeline = ({ checkUrl, timeline }) => {
    return (
        <Row className="timeline">
            <Row>
                <Col offset={1}><h1>Timeline of <strong>{checkUrl}</strong></h1></Col>
            </Row>
            <Row>
                <Col offset={1}>
                    <AntdTimeline>
                        {timeline.map((record, idx) =>
                            <TimelineItem key={idx} {...record} />
                        )}
                    </AntdTimeline>
                </Col>
            </Row>
        </Row>
    );
};

Timeline.propTypes = {
    checkUrl: PropTypes.string,
    timeline: PropTypes.arrayOf(PropTypes.shape(TimelineItem.propTypes)).isRequired,
};

Timeline.defaultProps = {
    checkUrl: 'URL IS MISSING',
};

export default Timeline;
