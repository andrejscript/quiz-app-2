import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz';

export default class Quiz extends Component {
  state = {
    questionCounter: 0,
    answerStatus: null, //{[id]: 'success'/'wrong'}
    isQuizFinished: null,
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
        id: 4,
        rightAnswer: 3,
        answers: [
          { text: 'Sport', id: 1 },
          { text: 'Cooking', id: 2 },
          { text: 'Travelling', id: 3 },
          { text: 'Pets', id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = answerId => {
    const { questionCounter, quiz } = this.state,
      activeQuestion = quiz[questionCounter];

    if (this.isQuizFinished()) {
      console.log('Finished');
    } else {
      console.log('Last...');
      const timeout = window.setTimeout(() => {
        this.setState(prevState => ({
          questionCounter: prevState.questionCounter + 1,
        }));

        window.clearTimeout(timeout);
      }, 1000);

      if (activeQuestion.rightAnswer === answerId) {
        console.log('Right )');
      } else {
        console.log('Wrong (');
      }
    }
  };

  isQuizFinished() {
    return this.state.questionCounter + 1 === this.state.quiz.length;
  }

  render() {
    const { quiz, questionCounter } = this.state;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all the questions</h1>
          <ActiveQuiz
            quiz={quiz}
            activeAnswers={quiz[questionCounter].answers}
            activeQuizNumber={quiz[questionCounter].id}
            question={quiz[questionCounter].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}
