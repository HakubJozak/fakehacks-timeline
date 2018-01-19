import React from 'react';

import Timeline from '../containers/Timeline';

const App = ({ children }) => (
    <div>
        {children}
    </div>
);

App.defaultProps = {
    children: null,
};

export default App;
