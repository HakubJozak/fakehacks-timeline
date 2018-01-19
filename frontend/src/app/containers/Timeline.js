import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Timeline from '../components/Timeline';

const mapStateToProps = (state, { location }) => ({
    articles: state.timeline.articles,
    checkUrl: location.query.url,
});
const mapDispatchToProps = dispatch => ({
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(Timeline);
