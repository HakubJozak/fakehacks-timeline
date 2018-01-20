import React from 'react';
import PropTypes from 'prop-types';
import Card from 'antd/lib/card';
import Icon from 'antd/lib/icon';
import Badge from 'antd/lib/badge';

import Resource from './Resource';

import './UndatedResources.scss';

class UndatedResources extends React.Component {
    static MIN_SHOW = 3;

    state = {
        showAll: false,
    }

    toggle = () => {
        this.setState(prevState => ({ showAll: !prevState.showAll }));
    }

    render() {
        const { resources } = this.props;
        const { showAll } = this.state;

        const count = showAll ? undefined : UndatedResources.MIN_SHOW;
        const remaining = resources.length - count;

        return (
            <Card
                title="Nedatováno"
                extra={resources.length > UndatedResources.MIN_SHOW && (
                    <span role="button" onClick={this.toggle}>
                        { !showAll && <span className="more">{remaining}</span> }
                        <Icon type={showAll ? 'up-circle-o' : 'down-circle-o'} />
                    </span>

                )}
                className="UndatedResources"
            >
                {
                    resources.slice(0, count).map((resource, idx) => (
                        <Resource key={idx} {...resource} />
                    ))
                }
            </Card>
        );
    };
}

UndatedResources.propTypes = {
    resources: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        source: Resource.propTypes.source,
    })).isRequired,
};

UndatedResources.defaultProps = {
};

export default UndatedResources;
