import React from 'react';
import { connect } from 'react-redux';

const Display = props => {
  return (
    <div className="display-screen">
      <div className="output">
        <div id="display" className="display-text">
          {props.currentInput}
        </div>
        <div className="expression-text">{props.expression}</div>
      </div>
    </div>
  );
};

function mapStateToProps({ expression, currentInput }) {
  return { expression, currentInput };
}

export default connect(mapStateToProps)(Display);
