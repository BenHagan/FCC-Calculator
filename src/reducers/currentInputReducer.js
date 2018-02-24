import {
  UPDATE_INPUT,
  CLEAR_INPUT,
  CLEAR_ALL,
  FUNC_INPUT,
  EVALUATE_EXPRESSION,
  DIRECT_UPDATE
} from '../actions/types';

import { REGEX_LEADING_ZERO } from './values';

export default function(state = '0', action) {
  switch (action.type) {
    case FUNC_INPUT:
      return action.payload;
    case UPDATE_INPUT:
      const re = /[0-9.]+/;
      return re
        .exec(state + action.payload)[0]
        .replace(/(?<=[.].*)[.]/g, '')
        .replace(REGEX_LEADING_ZERO, '')
        .replace(/^[.]/g, '0.');
    case CLEAR_ALL:
    case CLEAR_INPUT:
      return '0';
    case DIRECT_UPDATE:
      return action.payload.replace(/^[.]/g, '0.');
    case EVALUATE_EXPRESSION:
      // handle case where '=' is clicked first with no input
      return action.payload || action.payload === 0 ? action.payload : state;
    default:
      return state;
  }
}
