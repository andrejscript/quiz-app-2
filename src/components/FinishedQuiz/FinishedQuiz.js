import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = props => {
  //const {

  //} = props;
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          How are you?
          <i className={' '}></i>`
        </li>
      </ul>

      <p>Right 3 from 10</p>

      <button>Repeat the test</button>
    </div>
  );
};

export default FinishedQuiz;
