import types from './actionTypes';

export function requestSources() {
    return {
        type: types.sources.REQUEST_SOURCES,
    };
}

export function setSources(sources) {
    return {
        type: types.sources.SET_SOURCES,
        sources,
    };
}

