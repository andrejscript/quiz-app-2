import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = ({ answer, onAnswerClick }) => {
  return (
    <div
      className={classes.AnswerItem}
      onClick={() => onAnswerClick(answer.id)}
    >
      {answer.text}
    </div>
  );
};

export default AnswerItem;
