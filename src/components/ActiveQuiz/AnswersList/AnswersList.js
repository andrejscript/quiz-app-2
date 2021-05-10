import React from 'react';
import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = ({ answers }) => {
  return (
    <ul className={classes.AnswersList}>
      {answers.map((answer, index) => {
        return <AnswerItem answer={answer} key={answer.id} />;
      })}
    </ul>
  );
};

export default AnswersList;
