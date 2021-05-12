import React from 'react';
import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = ({answers, onAnswerClick}) => {
  
  return (
   <div className={classes.AnswersList}>
    {answers.map((answer) => {
      return (
        <AnswerItem
          key={answer.id}
          answer={answer}
          onAnswerClick={onAnswerClick}
        />
      )
    })}
   </div>
  );
};
  
export default AnswersList;