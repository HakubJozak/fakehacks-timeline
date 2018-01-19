import * as authActions from './AuthActions';
import * as errorActions from './ErrorActions';
import * as formActions from './FormActions';
import * as translateActions from './TranslateActions';
import * as timelineActions from './timelineActions';
import * as sourceActions from './sourceActions';

export {
    authActions,
    errorActions,
    formActions,
    translateActions,
    timelineActions,
    sourceActions,
};

export default {
    auth: authActions,
    error: errorActions,
    form: formActions,
    translate: translateActions,
    timeline: timelineActions,
    source: sourceActions,
};
