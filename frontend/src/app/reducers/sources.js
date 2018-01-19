import types from '../actions/actionTypes';

const initialState = {
    data: [
    ],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.sources.SET_SOURCES:
            return {
                ...state,
                data: action.sources,
                fetching: false,
            };
        default:
            return state;
    }
}

