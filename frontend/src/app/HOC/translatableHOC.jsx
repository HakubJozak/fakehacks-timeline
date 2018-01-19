import React from 'react';
import PropTypes from 'prop-types';
import cs from 'react-intl/locale-data/cs';

import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';

import messages from '../localization';
import getDisplayName from '../utilities/componentName';

import { translateSelector } from '../selectors';

addLocaleData([...cs]);

function translatable(TranslatableComponent) {
    const Component = (props) => (
        <IntlProvider
            locale={props.locale}
            messages={messages[props.locale]}
        >
            <TranslatableComponent {...props} />
        </IntlProvider>
    );

    Component.displayName = `Translatable(${getDisplayName(TranslatableComponent)})`;
    Component.propTypes = {
        locale: PropTypes.string.isRequired,
    };

    return connect(
        (state) => (translateSelector(state)),
    )(Component);
}

export default translatable;
