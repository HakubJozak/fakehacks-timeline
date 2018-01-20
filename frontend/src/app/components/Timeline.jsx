import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import AntdTimeline from 'antd/lib/timeline';
import { Row, Col } from 'antd/lib/grid';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import TimelineItem from './TimelineItem';

import './timeline.scss';

const backButtonStyle = {
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#e9e9e9',
};

const Timeline = ({ checkUrl, timeline }) => {
    return (
        <Row className="timeline">
            <Row>
                <Link to="/">
                    <Button type="secondary" style={backButtonStyle}>Check another url</Button>
                </Link>
            </Row>
            <Row>
                <Col span={10}>
                    <Card title={<strong title={checkUrl}>{checkUrl}</strong>} >
                        <img src={checkUrl} alt={checkUrl} />
                    </Card>
                </Col>
                <Col offset={1} span={13}>
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
