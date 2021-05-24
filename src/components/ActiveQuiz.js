import React from 'react';
import AnswerList from './AnswerList/AnswerList';
import classes from './ActiveQuiz.module.css';

const ActiveQuiz = (props) => {
  const { quiz, question, activeAnswers, activeQuizNumber, onAnswerClick } = props;

  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{activeQuizNumber}. </strong>
          {question}
        </span>

        <small>
          {activeQuizNumber} from {quiz.length}
        </small>
      </p>
      <AnswerList 
        answers={activeAnswers}
        onAnswerClick={onAnswerClick} />
    </div>
  );
};

export default ActiveQuiz;
