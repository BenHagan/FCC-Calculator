import {
  UPDATE_INPUT,
  CLEAR_INPUT,
  CLEAR_ALL,
  FUNC_INPUT,
  EVALUATE_EXPRESSION
} from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case FUNC_INPUT:
      return action.payload;
    case UPDATE_INPUT:
      const re = /\d+/;
      return re.exec(state + action.payload)[0];
    case CLEAR_ALL:
    case CLEAR_INPUT:
      return '';
    case EVALUATE_EXPRESSION:
      return action.payload;
    default:
      return state;
  }
}
