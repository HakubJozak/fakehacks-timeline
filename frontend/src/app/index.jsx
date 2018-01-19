// Template dependecies
import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import routes from './routes';

import './index.scss';

const store = configureStore();
const rootElement = document.getElementById('app');

const history = syncHistoryWithStore(browserHistory, store);

// Render the React application to the DOM
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    rootElement
);
