import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz';

export default class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'What is your name?',
        id: 1,
        answers: [
          { text: 'Jack', id: 1 },
          { text: 'Smith', id: 2 },
          { text: 'Joe', id: 3 },
          { text: 'Willy', id: 4 },
        ],
      },
    ],
  };

  render() {
    const { quiz } = this.state;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all the questions</h1>
          <ActiveQuiz 
            quiz={quiz}
            question={quiz[0].question} />
        </div>
      </div>
    );
  }
}
