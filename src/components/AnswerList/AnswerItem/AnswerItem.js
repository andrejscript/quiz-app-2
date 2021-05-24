import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = ({text, id, onAnswerClick}) => {
  return <li 
    onClick={() => onAnswerClick(id)} 
    className={classes.AnswerItem}>{text}
    </li>;
};

export default AnswerItem;
