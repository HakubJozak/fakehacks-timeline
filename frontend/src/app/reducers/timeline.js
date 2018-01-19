import types from '../actions/actionTypes';

const initialState = {
    checkUrl: 'no url',
    articles: [
        { date: '2018-01-12T23:37:00.000Z', url: 'http://foo', title: 'foo' },
        { date: '2018-01-14T14:37:00.000Z', url: 'http://ba', title: 'ba' },
        { date: '2018-01-14T14:37:00.000Z', url: 'http://bar', title: 'bar' },
        { date: '2018-02-23T14:37:00.000Z', url: 'http://baz', title: 'baz' },
    ],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.timeline.REQUEST_TIMELINE:
            return {
                ...state,
                checkUrl: action.url,
            };
        case types.timeline.SET_TIMELINE:
            return {
                ...state,
                articles: action.articles,
            };
        default:
            return state;
    }
}

