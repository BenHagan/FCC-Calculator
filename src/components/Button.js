import React from 'react';

const Button = props => {
  const { value, className, id } = props;
  return (
    <button
      id={id}
      value={value}
      className={className}
      onClick={() => props.handleClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
