import * as authActions from './AuthActions';
import * as errorActions from './ErrorActions';
import * as formActions from './FormActions';
import * as translateActions from './TranslateActions';
import * as timelineActions from './timelineActions';
import * as sourceActions from './sourceActions';
import * as sourcesActions from './sourcesActions';
import * as appActions from './appActions';

export {
    authActions,
    errorActions,
    formActions,
    translateActions,
    timelineActions,
    sourceActions,
    sourcesActions,
    appActions,
};

export default {
    auth: authActions,
    error: errorActions,
    form: formActions,
    translate: translateActions,
    timeline: timelineActions,
    source: sourceActions,
    sources: sourcesActions,
    app: appActions,
};
