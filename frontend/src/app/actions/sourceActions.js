import types from './actionTypes';

export function submitUrl() {
    return {
        type: types.source.SUBMIT_URL,
    };
}

export function urlSubmitted() {
    return {
        type: types.source.URL_SUBMITTED,
    };
}

export function tryUrlAgain(url) {
    return {
        type: types.source.TRY_URL_AGAIN,
        url,
    };
}
