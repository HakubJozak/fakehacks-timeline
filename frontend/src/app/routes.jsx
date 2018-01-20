import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import errorBoundary from 'ackee-frontend-toolkit/lib/HOC/errorBoundary';
import translatable from './HOC/translatableHOC';

import App from './components/AppComponent';
import ErrorComponent from './components/Error/Error';

import Source from './containers/Source';
import Dashboard from './containers/Dashboard';

export default (
    <Route
        path="/"
        component={errorBoundary(ErrorComponent)(translatable(App))}
    >
        <IndexRoute component={Source} />
        <Route path="dashboard" component={Dashboard} />
    </Route>
);

