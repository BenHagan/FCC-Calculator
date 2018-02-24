import {
  UPDATE_INPUT,
  CLEAR_ALL,
  FUNC_INPUT,
  CLEAR_INPUT,
  EVALUATE_EXPRESSION,
  DIRECT_UPDATE
} from '../actions/types';

import { REGEX_LEADING_ZERO } from './values';

export default function(state = '0', action) {
  switch (action.type) {
    case EVALUATE_EXPRESSION:
      // handle case where '=' is clicked first with no input
      return action.payload || action.payload === 0
        ? `${action.expression}=${action.payload}`
        : state;
    case CLEAR_ALL:
      return '0';
    case CLEAR_INPUT:
      const sub = state.substring(0, state.lastIndexOf(action.payload));
      return state === '0' || state.length === 1 ? '0' : sub === '' ? '0' : sub;

    case DIRECT_UPDATE:
      return action.payload.replace(/^[.]/g, '0.');
    case FUNC_INPUT:
      return state.lastIndexOf('=') !== -1
        ? `${state.substring(state.lastIndexOf('=') + 1)}${action.payload}`
        : `${state}${action.payload}`.replace(REGEX_LEADING_ZERO, '');
    case UPDATE_INPUT:
      //  regex removing leading zeros, except on sub 1 decimal numbers
      // chained regex turning '.x' into '0.x'
      return `${state}${action.payload}`
        .replace(REGEX_LEADING_ZERO, '')
        .replace(/(?<![0-9])[.]/g, '0.');

    default:
      return state;
  }
}
