import { combineReducers } from 'redux';
import expressionReducer from './expressionReducer';
import currentInputReducer from './currentInputReducer';

export default combineReducers({
  expression: expressionReducer,
  currentInput: currentInputReducer
});
