import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = ({ quiz, results }) => {
  const cls = ['fa'];

  console.log();

  if (results.id === 'wrong') {
    cls.push('wrong');
  }

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {quiz.map((quizItem, index) => {
          return (
            <li key={quizItem.id}>
              <strong>{index + 1}. </strong>
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
            /* <li>
          <strong>2. </strong>
          WT r doing?
          <i className={'fa fa-check ' + classes.success}></i>
        </li>  */
          );
        })}
      </ul>

      <p>Right 3 from 10</p>

      <button>Repeat the test</button>
    </div>
  );
};

export default FinishedQuiz;
