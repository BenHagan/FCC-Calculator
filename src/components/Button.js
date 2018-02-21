import React from 'react';

const Button = props => {
  const { value, className } = props;
  return (
    <button
      value={value}
      className={className}
      onClick={() => props.handleClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
