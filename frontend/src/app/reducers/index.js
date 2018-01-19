import { combineReducers } from 'redux';

import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { reducer as auth } from 'redux-token-auth';

import translate from './translate';
import errors from './errors';
import timeline from './timeline';
import sources from './sources';

const rootReducer = combineReducers({
    auth,
    errors,
    form,
    routing,
    translate,
    timeline,
    sources,
});

export default rootReducer;
