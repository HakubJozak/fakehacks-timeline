import * as authActions from './AuthActions';
import * as errorActions from './ErrorActions';
import * as formActions from './FormActions';
import * as translateActions from './TranslateActions';
import * as timelineActions from './timelineActions';

export {
    authActions,
    errorActions,
    formActions,
    translateActions,
    timelineActions,
};

export default {
    auth: authActions,
    error: errorActions,
    form: formActions,
    translate: translateActions,
    timeline: timelineActions,
};
