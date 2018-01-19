import { isEmpty } from 'lodash';
import config from '../config/config';

export const authSelector = state => state.auth;
export const translateSelector = state => state.translate;
export const routingSelector = state => state.routing.locationBeforeTransitions;
