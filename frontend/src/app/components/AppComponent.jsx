import React from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames';

const App = ({ children, router }) => (
    
    <div className={classNames({ 'withBackground':
         router.location.pathname == '/'})} >
      {children}
    </div>
);

App.defaultProps = {
    children: null,
};

export default withRouter(App);
