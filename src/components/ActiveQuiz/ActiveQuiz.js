import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {
  let { 
    question, 
    answers, 
    quizLength,
    answerNumber, 
    state,
    onAnswerClick } 
    = props;

  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{answerNumber}. </strong>
          {question}
        </span>
        <small>
          {answerNumber} from {quizLength}
        </small>
      </p>
      <AnswersList
        answers={answers}
        state={state}
        onAnswerClick={onAnswerClick}
      />
    </div>
  );
};

export default ActiveQuiz;
