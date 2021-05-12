import React, { Component } from 'react';
import classes from './Quiz.module.css';
// import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'What is your profession?',
        answers: [
          {text: 'Question #1', id: 1 },
          {text: 'Question #2', id: 2 },
          {text: 'Question #3', id: 3 },
          {text: 'Question #4', id: 4 }
        ]
      }
    ],
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all questions</h1>
          <ActiveQuiz 
            question={this.state.quiz[0].question}
            answers={this.state.quiz[0].answers}
            />
        </div>
      </div>
    );
  }
}
