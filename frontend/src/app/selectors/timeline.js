import { createSelector } from 'reselect';

// eslint-disable-next-line import/prefer-default-export
export const timelineSelector = createSelector(
    state => state.timeline.data,
    data => {
        return data.map(({ google_indexed_at, url, source }) => ({
            date: google_indexed_at,
            url,
            source,
        }));
    }
);
