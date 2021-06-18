import React from 'react';
import classes from './Input.module.css';
const Input = props => {
  const inputType = props.type || 'text',
    cls = [classes.Input],
    htmlFor = `${inputType}-${Math.random()}`;

  return (
    <div className={cls.join(' ')}>
      <label htmlFor=''>
        <input
          type={inputType}
          id={htmlFor}
          value={props.value}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

export default Input;
