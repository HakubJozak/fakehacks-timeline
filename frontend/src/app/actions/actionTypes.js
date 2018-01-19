const createType = (
    prefix,
    suffixes = ['_STARTED', '_COMPLETED', '_SUCCEEDED', '_FAILED']
) => {
    const types = {
        [prefix]: prefix,
    };
    suffixes.forEach((suffix) => {
        const type = `${prefix}${suffix}`;
        types[type] = type;
    });
    return types;
};

export default {
    auth: {
        LOGIN_FORM: 'LOGIN_FORM',
        ...createType('REQUEST_USER'),
    },
    error: {
        CLEAR_LOGIN_ERROR: 'CLEAR_LOGIN_ERROR',
        CLEAR_REGISTRATION_ERROR: 'CLEAR_REGISTRATION_ERROR',
    },
    forms: {
        FORM_SUBMIT: 'FORM_SUBMIT',
    },
    translate: {
        SET_LOCALE: 'SET_LOCALE',
        LOAD_LOCALE: 'LOAD_LOCALE',
    },
    source: {
        SUBMIT_URL: 'SUBMIT_URL',
    },
    sources: {
        ...createType('REQUEST_SOURCES'),
        SET_SOURCES: 'SET_SOURCES',
    },
    timeline: {
        ...createType('REQUEST_TIMELINE'),
        SET_TIMELINE: 'SET_TIMELINE',
    },
};
