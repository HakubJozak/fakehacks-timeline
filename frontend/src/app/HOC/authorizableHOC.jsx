import React from 'react';

import { connect } from 'react-redux';
import { authUser } from 'redux-token-auth';
import { PropTypes } from 'prop-types';

import getDisplayName from '../utilities/componentName';

import { getTokens } from '../utilities/auth';

const MockAppLoader = () => (
    <div>MockAppLoader</div>
);

function authorizable(AuthorizableComponent, Firewall, Loader = MockAppLoader) {
    const AuthorizedComponent = (props) => {
        const tokens = getTokens();
        if (props.user) {
            return <AuthorizableComponent {...props} />;
        } else if (tokens) {
            return <Loader />;
        }
        return <Firewall />;
    };

    AuthorizedComponent.displayName = `Authorizable(${getDisplayName(AuthorizableComponent)})`;
    AuthorizedComponent.propTypes = {
        // eslint-disable-next-line react/forbid-prop-types
        user: PropTypes.object,
    };
    AuthorizedComponent.defaultProps = {
        user: null,
    };

    return (
        connect(
            (state) => ({
                user: authUser(state),
            }),
        )(AuthorizedComponent)
    );
}

export default authorizable;
