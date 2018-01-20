import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import Timeline from 'antd/lib/timeline';
import { Row, Col } from 'antd/lib/grid';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import TimelineItem from './TimelineItem';
import UndatedResources from './UndatedResources';

import './Dashboard.scss';

const backButtonStyle = {
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#e9e9e9',
};

const Dashboard = ({ checkUrl, timeline, undated }) => {
    return (
        <Row className="Dashboard">
            <Row>
                <Link to="/">
                    <Button type="secondary" style={backButtonStyle}>Check another url</Button>
                </Link>
            </Row>
            <Row gutter={8}>
                <Col span={11}>
                    <Card title={<div className="title-inner" title={checkUrl}>{checkUrl}</div>} >
                        <img src={checkUrl} alt={checkUrl} />
                    </Card>
                </Col>
                <Col span={13} className="timeline-container">
                    { undated.length > 0 && <UndatedResources resources={undated} /> }
                    <Timeline>
                        {timeline.map((dateItems, idx) =>
                            <TimelineItem key={idx} items={dateItems} />
                        )}
                    </Timeline>
                </Col>
            </Row>
        </Row>
    );
};

Dashboard.propTypes = {
    checkUrl: PropTypes.string,
    undated: UndatedResources.propTypes.resources,
    timeline: PropTypes.arrayOf(TimelineItem.propTypes.items).isRequired,
};

Dashboard.defaultProps = {
    checkUrl: 'URL IS MISSING',
    undated: [],
};

export default Dashboard;
