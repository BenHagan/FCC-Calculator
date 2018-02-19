import {
  UPDATE_EXPRESSION,
  UPDATE_INPUT,
  CLEAR_INPUT,
  CLEAR_ALL,
  FUNC_INPUT,
  EVALUATE_EXPRESSION
} from './types';

import math from 'mathjs';

export function updateExpression(value) {
  return {
    type: UPDATE_EXPRESSION,
    payload: value
  };
}

export function updateInput(value, currentInput) {
  if (value == '*' || value == '/') {
    return {
      type: FUNC_INPUT,
      currentInput,
      payload: value
    };
  }
  return {
    type: UPDATE_INPUT,
    payload: value
  };
}

export function clearAll() {
  return {
    type: CLEAR_ALL
  };
}

export function clearInput(value) {
  return {
    type: CLEAR_INPUT,
    payload: value
  };
}

export function evaluateExpression(value) {
  return {
    type: EVALUATE_EXPRESSION,
    expression: value,
    payload: math.eval(value)
  };
}
