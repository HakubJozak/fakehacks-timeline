import { createSelector } from 'reselect';
import { routingSelector } from 'ackee-frontend-toolkit';

export const authSelector = state => state.auth;
export const translateSelector = state => state.translate;
export const checkUrlSelector = createSelector(
    routingSelector,
    routing => routing.query.url,
);
