import types from './actionTypes';

export function requestTimeline() {
    return {
        type: types.timeline.REQUEST_TIMELINE,
    };
}

export function setTimeline(timeline) {
    return {
        type: types.timeline.SET_TIMELINE,
        timeline,
    };
}

