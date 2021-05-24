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
      {
        question: 'How old are you?',
        id: 2,
        answers: [
          { text: '17', id: 1 },
          { text: '22', id: 2 },
          { text: '34', id: 3 },
          { text: '45', id: 4 },
        ],
      },
      {
        question: 'What is your job?',
        id: 3,
        answers: [
          { text: 'Sailor', id: 1 },
          { text: 'Artist', id: 2 },
          { text: 'Coder', id: 3 },
          { text: 'Lawyer', id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (id) => {
    console.log(id);
    
  }

  render() {
    const { quiz } = this.state;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all the questions</h1>
          <ActiveQuiz 
            quiz={quiz}
            activeAnswers={quiz[0].answers}
            activeQuizNumber={quiz[0].id}
            question={quiz[0].question} 
            onAnswerClick={this.onAnswerClickHandler}
            />
        </div>
      </div>
    );
  }
}
