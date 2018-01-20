/**
 * Created by Martin Kadlec on 24/10/16.
 */

import types from '../actions/actionTypes';

/**
 * LOCALE actions
 */

export function setLocale(locale) {
    return {
        type: types.translate.SET_LOCALE,
        locale,
    };
}

export function loadLocale() {
    return {
        type: types.translate.LOAD_LOCALE,
    };
}
