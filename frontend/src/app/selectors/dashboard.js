import { createSelector } from 'reselect';
import _ from 'lodash';

const sortByTrust = (a, b) => a.source.trust - b.source.trust;

const dataSelector = state => state.timeline.data;

export const timelineSelector = createSelector(
    dataSelector,
    data => {
        const grouped = [];

        data
            .filter(item => item.date)
            .sort(sortByTrust)
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

export const undatedResourcesSelector = createSelector(
    dataSelector,
    data => {
        return data
            .filter(item => !item.date)
            .sort(sortByTrust);
    }
);

