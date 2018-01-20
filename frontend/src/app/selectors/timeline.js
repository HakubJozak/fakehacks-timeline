import { createSelector } from 'reselect';
import _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const timelineSelector = createSelector(
    state => state.timeline.data,
    timeline => {
        const grouped = [];

        timeline
            .filter(item => item.date)
            .forEach(item => {
                const last = _.last(grouped);

                if (last && last[0].date.toString() === item.date.toString()) {
                    last.push(item);
                } else {
                    grouped.push([item]);
                }
            });

        return grouped;
    }
);
