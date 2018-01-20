import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Timeline from '../components/Dashboard';
import { timelineSelector, undatedResourcesSelector } from '../selectors';
import loadable from '../HOC/loadableHOC';

const mapStateToProps = (state, { location }) => ({
    timeline: timelineSelector(state),
    undated: undatedResourcesSelector(state),
    showLoader: state.timeline.fetching,
    checkUrl: location.query.url,
});
const mapDispatchToProps = dispatch => ({
});

const TimelineWithLoader = loadable(Timeline, 'Loading timeline');

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(TimelineWithLoader);
