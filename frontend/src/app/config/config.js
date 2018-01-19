import _ from 'lodash';

const env = process.env.BUILD_ENV;
const envConfig = require(`./config.${env}.js`).default;

const apiBase = _.get(envConfig, 'api.base');
const apiVersion = _.get(envConfig, 'api.version');
const chatPathBase = 'chat/';
const chatBase = 'chat.';

const defaults = {
    // default configuration goes here
    appName: 'React Redux skeleton',
    devTools: true,
    appFilter: {
        selectFields: [
            'tripSapId',
            'plate',
            'trailerPlate',
            'plannerName',
            'driverName',
            'owner',
        ],
    },
    api: {
        drivers: '/v1/admin/drivers',
        events: '/v1/admin/events',
        groups: '/v1/admin/vehicle-groups',
        group: '/v1/admin/vehicle-groups/:id',
        me: '/v1/users/me',
        metadata: '/v1/admin/metadata',
        refresh: '/v1/auth/refresh',
        vehicles: '/v1/admin/vehicles',
        timeline: '/v1/admin/timeline',
        trips: '/v1/admin/trips',
        trip: '/v1/admin/trips/:id',
        notes: '/v1/admin/notes',
        signin: '/v1/auth/sign-in',
    },
    firebase: {
        notifications: (userId) => ({
            path: `/notifications/${userId}`,
            store: `notifications.${userId}`,
        }),
        notificationsCount: (userId) => ({
            path: `/notifications/${userId}/count`,
            storeAs: `notifications_${userId}_count`,
        }),
        user: (userId) => ({
            path: `/${chatPathBase}users/${userId}`,
            store: `${chatBase}users.${userId}`,
        }),
        conversation: (conversationId) => ({
            path: `/${chatPathBase}conversations/${conversationId}`,
            store: `${chatBase}conversations.${conversationId}`,
        }),
        conversationMessages: (conversationId) => ({
            path: `/${chatPathBase}messages/${conversationId}`,
            store: `${chatBase}messages.${conversationId}`,
        }),
        conversationLastMessage: (conversationId) => ({
            path: `/${chatPathBase}conversations/${conversationId}/lastMessage`,
            store: `${chatBase}conversations.${conversationId}.lastMessage`,
        }),
        userConversation: (userId, conversationId) => ({
            path: `/${chatPathBase}usersConversations/dispatcher_${userId}/${conversationId}`,
            store: `${chatBase}usersConversations.dispatcher_${userId}.${conversationId}`,
        }),
        userConversations: (userId) => ({
            path: `/${chatPathBase}usersConversations/dispatcher_${userId}`,
            store: `${chatBase}usersConversations.dispatcher_${userId}`,
        }),
        userId: (userId) => `dispatcher_${userId}`,
    },
    chat: {
        supportedImageTypes: [
            'image/jpeg',
            'image/png',
        ],
    },
    date: 'HH:mm DD.MM.YYYY',
    forms: {
        appFilter: 'appFilterForm',
        login: 'loginForm',
        newMessage: 'messageForm',
        searchConversations: 'searchForm',
    },
    imageServer: {
        options: {
            width: 250,
            height: 250,
            crop: 'fill',
        },
    },
    timelineRefreshInterval: 30000, // in miliseconds
    map: {
        center: {
            lat: 50,
            lng: 16,
        },
        zoom: 7,
    },
};

const config = _.merge(defaults, envConfig);

export default config;
