import React from 'react';
import PropTypes from 'prop-types';

import AntdTimeline from 'antd/lib/timeline';
import { Row, Col } from 'antd/lib/grid';
import TimelineItem from './TimelineItem';

const Timeline = ({ articles }) => {
    return (
        <Row>
            <Row>
                <Col offset={8}><h1>Timeline pro url <strong></strong></h1></Col>
            </Row>
            <Row>
                <Col offset={8}>
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
    articles: PropTypes.arrayOf(PropTypes.shape(TimelineItem.propTypes)).isRequired,
};

export default Timeline;
