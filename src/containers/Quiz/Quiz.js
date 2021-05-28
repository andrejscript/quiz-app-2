import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz';

export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: 'What is your name?',
        id: 1,
        rightAnswer: 4,
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
        rightAnswer: 2,
        answers: [
          { text: '17', id: 1 },
          { text: '32', id: 2 },
          { text: '22', id: 3 },
          { text: '45', id: 4 },
        ],
      },
      {
        question: 'What is your job?',
        id: 3,
        rightAnswer: 3,
        answers: [
          { text: 'Sailor', id: 1 },
          { text: 'Artist', id: 2 },
          { text: 'Coder', id: 3 },
          { text: 'Lawyer', id: 4 },
        ],
      },
      {
        question: 'What is your hobby?',
        id: 1,
        rightAnswer: 2,
        answers: [
          { text: 'Sprot', id: 1 },
          { text: 'Cooking', id: 2 },
          { text: 'Travelling', id: 3 },
          { text: 'Pets', id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (id) => {
    if (id === this.state.quiz[this.state.activeQuestion].rightAnswer) {
      console.log('yeap', id);
      this.setState({ activeQuestion: this.state.activeQuestion + 1 });
    }
    console.log('none', id);
  };

  render() {
    const { quiz, activeQuestion } = this.state;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all the questions</h1>
          <ActiveQuiz
            quiz={quiz}
            activeAnswers={quiz[activeQuestion].answers}
            activeQuizNumber={quiz[activeQuestion].id}
            question={quiz[activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}
