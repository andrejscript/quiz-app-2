import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = ({ results }) => {
  console.log(results);

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          How are you?
          <i className={'fa fa-times ' + classes.wrong}></i>
        </li>
        <li>
          <strong>2. </strong>
          WT r doing?
          <i className={'fa fa-check ' + classes.success}></i>
        </li>
      </ul>

      <p>Right 3 from 10</p>

      <button>Repeat the test</button>
    </div>
  );
};

export default FinishedQuiz;
