import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';
import multi from 'redux-multi';
import imuttable from 'redux-immutable-state-invariant';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const routingMiddleware = routerMiddleware(browserHistory);
    const imuttableMiddleware = imuttable();
    const middlewares = [multi, sagaMiddleware, routingMiddleware];

    let middleware;
    let enhancer;
    if (process.env.NODE_ENV === 'production') {
        middleware = applyMiddleware(...middlewares);
        enhancer = compose(
            middleware,
        );
    } else {
        middleware = applyMiddleware(...[...middlewares, imuttableMiddleware]);
        enhancer = compose(
            middleware,
            window.devToolsExtension ? window.devToolsExtension() : r => (r),
        );
    }

    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);

    return store;
}
