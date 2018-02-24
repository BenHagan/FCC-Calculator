import {
  UPDATE_EXPRESSION,
  UPDATE_INPUT,
  CLEAR_INPUT,
  CLEAR_ALL,
  FUNC_INPUT,
  EVALUATE_EXPRESSION,
  DIRECT_UPDATE
} from './types';

import math from 'mathjs';

const funcs = '*/-+';

export function directUpdate(value) {
  return {
    type: DIRECT_UPDATE,
    payload: value
  };
}

export function updateExpression(value) {
  return {
    type: UPDATE_EXPRESSION,
    payload: value
  };
}

export function updateInput(value) {
  if (funcs.indexOf(value) !== -1) {
    return {
      type: FUNC_INPUT,
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
