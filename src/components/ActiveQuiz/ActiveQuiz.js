import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => {
  console.log(props);
  
  let { question, answers, onAnswerClick, quizLength, answerNumber } = props;

  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{answerNumber}. </strong>
          {question}
        </span>
        <small>{answerNumber} from {quizLength}</small>
      </p>
      <AnswersList answers={answers} onAnswerClick={onAnswerClick} />
    </div>
  );
};

export default ActiveQuiz;
