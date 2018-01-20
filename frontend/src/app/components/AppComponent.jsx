import React from 'react';

const App = ({ children }) => (
    <div>
        {children}
    </div>
);

App.defaultProps = {
    children: null,
};

export default App;
