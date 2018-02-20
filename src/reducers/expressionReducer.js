import {
  UPDATE_INPUT,
  CLEAR_ALL,
  FUNC_INPUT,
  CLEAR_INPUT,
  EVALUATE_EXPRESSION
} from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case EVALUATE_EXPRESSION:
      return action.expression + '=' + action.payload;
    case CLEAR_ALL:
      return '';
    case CLEAR_INPUT:
      return state.substring(0, state.lastIndexOf(action.payload));
    case FUNC_INPUT:
    case UPDATE_INPUT:
      return `${state}${action.payload}`;
    default:
      return state;
  }
}
