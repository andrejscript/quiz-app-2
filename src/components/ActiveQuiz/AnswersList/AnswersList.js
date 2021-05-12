import React from 'react';
import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = ({answers, state, onAnswerClick}) => {
  
  return (
   <div className={classes.AnswersList}>
    {answers.map((answer) => {
      return (
        <AnswerItem
          key={answer.id}
          answer={answer}
          onAnswerClick={onAnswerClick}
          state={state ? state[answer.id] : null}
        />
      )
    })}
   </div>
  );
};
  
export default AnswersList;