import React from 'react';
import classes from './Input.module.css';
const Input = props => {
  const inputType = props.type || 'text';
  return (
    <div>
      <label htmlFor=''>
        <input type={inputType} />
      </label>
    </div>
  );
};

export default Input;
