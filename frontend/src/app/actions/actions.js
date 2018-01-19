import * as authActions from './AuthActions';
import * as errorActions from './ErrorActions';
import * as formActions from './FormActions';
import * as translateActions from './TranslateActions';

export {
    authActions,
    errorActions,
    formActions,
    translateActions,
};

export default {
    auth: authActions,
    error: errorActions,
    form: formActions,
    translate: translateActions,
};
