import React from 'react';
import classes from './Button.module.css';

const Button = ({ onRetest }) => {
  return <button className={classes.Button} onClick={onRetest} />;
};

export default Button;
