import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = ({ quiz, results }) => {
  // console.log();

  if (results.id === 'wrong') {
    cls.push('wrong');
  }

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {quiz.map((quizItem, index) => {
          const cls = ['fa', results.id] === 'success' ? 'success' : 'wrong';

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
