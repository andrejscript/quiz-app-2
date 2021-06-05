import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = ({ onToggle }) => (
  <div className={classes.Backdrop} onClick={onToggle}></div>
);

export default Backdrop;
