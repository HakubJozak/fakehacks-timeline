import types from '../actions/actionTypes';

const initialState = {
    defaultUrl: 'http://forum24.cz/wp-content/uploads/2017/01/HOAX-uprchl%C3%ADci-768x576.jpg', //'http://cdn2.img.cz.sputniknews.com/images/149/45/1494505.jpg',,
    error: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.source.URL_SUBMITTED:
            return {
                error: null,
            };
        case types.source.TRY_URL_AGAIN:
            return {
                ...state,
                defaultUrl: action.url,
                error: true, // TODO: add error string
            };
        case types.source.CLOSE_ERROR_WINDOW:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}
