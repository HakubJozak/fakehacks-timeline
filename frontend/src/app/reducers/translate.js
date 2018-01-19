import types from '../actions/actionTypes';

const LocalStorageHandlers = {
    loadLocale: () => localStorage.getItem('locale'),
    saveLocale: (locale) => {
        localStorage.setItem('locale', locale);
    },
};

const initialState = {
    locale: 'cs',
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.translate.SET_LOCALE:
            LocalStorageHandlers.saveLocale(action.locale);
            return {
                ...state,
                locale: action.locale,
            };
        case types.translate.LOAD_LOCALE:
            return {
                ...state,
                locale: LocalStorageHandlers.loadLocale() || state.locale,
            };
        default:
            return state;
    }
}

