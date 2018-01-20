import types from '../actions/actionTypes';

const initialState = {
    fetching: false,
    data: [
    ],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.timeline.REQUEST_TIMELINE:
            return {
                ...state,
                fetching: true,
            };
        case types.timeline.REQUEST_TIMELINE_COMPLETED:
            return {
                ...state,
                fetching: false,
            };
        case types.timeline.SET_TIMELINE:
            return {
                ...state,
                data: action.timeline,
            };
        default:
            return state;
    }
}

