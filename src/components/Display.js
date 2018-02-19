import React from 'react';
import { connect } from 'react-redux';

const Display = props => {
  return (
    <div className="display-screen">
      <div className="display-text">{props.currentInput}</div>
      <br />
      <div className="display-text">{props.expression}</div>
    </div>
  );
};

function mapStateToProps({ expression, currentInput }) {
  return { expression, currentInput };
}

export default connect(mapStateToProps)(Display);
