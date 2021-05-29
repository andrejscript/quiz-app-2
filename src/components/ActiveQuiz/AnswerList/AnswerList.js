import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import classes from './AnswerList.module.css';

const AnswerList = props => {
  const { answers, onAnswerClick, answerStatus } = props;

  return (
    <ul className={classes.AnswerList}>
      {answers.map(item => {
        return (
          <AnswerItem
            text={item.text}
            id={item.id}
            key={item.id}
            answerStatus={answerStatus ? answerStatus[item.id] : null}
            onAnswerClick={onAnswerClick}
          />
        );
      })}
    </ul>
  );
};

export default AnswerList;
