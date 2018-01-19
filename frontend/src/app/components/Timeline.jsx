import React from 'react';
import PropTypes from 'prop-types';

import AntdTimeline from 'antd/lib/timeline';
import { Row, Col } from 'antd/lib/grid';
import TimelineItem from './TimelineItem';

import './timeline.scss';

const Timeline = ({ checkUrl, articles }) => {
    return (
        <Row className="timeline">
            <Row>
                <Col offset={1}><h1>Timeline pro url <strong>{checkUrl}</strong></h1></Col>
            </Row>
            <Row>
                <Col offset={1}>
                    <AntdTimeline>
                        {articles.map((article, idx) =>
                            <TimelineItem key={idx} {...article} />
                        )}
                    </AntdTimeline>
                </Col>
            </Row>
        </Row>
    );
};

Timeline.propTypes = {
    checkUrl: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(PropTypes.shape(TimelineItem.propTypes)).isRequired,
};

export default Timeline;
