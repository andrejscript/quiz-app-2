import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = ({ text, id, onAnswerClick, answerStatus }) => {
  const cls = [classes.AnswerItem];

  if (answerStatus) {
    cls.push(classes[answerStatus]);
  }

  return (
    <li onClick={() => onAnswerClick(id)} className={cls.join(' ')}>
      {text}
    </li>
  );
};

export default AnswerItem;
