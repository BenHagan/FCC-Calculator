import React from 'react';

const Button = props => {
  const { value } = props;
  return (
    <button value={value} onClick={() => props.handleClick(value)}>
      {value}
    </button>
  );
};

export default Button;
