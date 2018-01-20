import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Notification from '../components/Notification';
import { appActions } from '../actions/actions';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = ({
    onClose: appActions.closeNotification,
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Notification);
