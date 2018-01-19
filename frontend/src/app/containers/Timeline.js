import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Timeline from '../components/Timeline';

const mapStateToProps = state => ({
    articles: state.timeline.articles,
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
