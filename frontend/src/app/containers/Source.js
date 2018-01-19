import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Source from '../components/Source';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(Source);
