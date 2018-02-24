import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import Display from './Display';
import * as actions from '../actions';

const a = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

class Calculator extends Component {
  handleButtonClick(value) {
    if (/^0|[-/+=]/g.test(this.props.currentInput)) {
      if (value !== '0') {
        this.props.updateInput(value);
      }
    } else {
      this.props.expression.lastIndexOf('=') !== -1 &&
      /[^*-/+=]|[.]/g.test(value)
        ? this.props.directUpdate(value)
        : this.props.updateInput(value);
    }
  }

  handleCeClick() {
    if (this.props.expression.indexOf('=') === -1) {
      this.props.clearInput(this.props.currentInput);
    } else {
      this.props.clearAll();
    }
  }

  render() {
    return (
      <div className="calc-container">
        <Display />
        <div className="button-container">
          <Button
            key="ac"
            value="ac"
            handleClick={() => {
              this.props.clearAll();
            }}
          />
          <Button
            key="ce"
            value="ce"
            handleClick={this.handleCeClick.bind(this)}
          />
          <Button
            key="div"
            value="/"
            handleClick={this.handleButtonClick.bind(this)}
          />
          <Button
            key="mult"
            value="*"
            handleClick={this.handleButtonClick.bind(this)}
          />
        </div>
        <div className="button-container" id="numbers">
          {a.map(i => (
            <Button
              key={i}
              value={i}
              handleClick={this.handleButtonClick.bind(this)}
            />
          ))}
        </div>
        <div className="button-container" id="vert-function">
          <Button
            key="add"
            value="+"
            handleClick={this.handleButtonClick.bind(this)}
          />
          <Button
            key="sub"
            value="-"
            handleClick={this.handleButtonClick.bind(this)}
          />
          <Button
            key="="
            value="="
            handleClick={() => {
              this.props.evaluateExpression(this.props.expression);
            }}
          />
        </div>
        <div className="button-container" id="bottom-row">
          <Button
            key="0"
            value="0"
            className="zero-button"
            handleClick={this.handleButtonClick.bind(this)}
          />
          <Button
            key="decimal"
            value="."
            handleClick={this.handleButtonClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ expression, currentInput }) {
  return { expression, currentInput };
}

export default connect(mapStateToProps, actions)(Calculator);
