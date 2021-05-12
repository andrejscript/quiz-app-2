import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: 'What is your name?',
        rightAnsweId: 2,
        id: 1,
        answers: [
          { text: 'Todd', id: 1 },
          { text: 'Alex', id: 2 },
          { text: 'Sam', id: 3 },
          { text: 'Will', id: 4 },
        ],
      },
      {
        question: 'What do you like to do?',
        rightAnsweId: 3,
        id: 2,
        answers: [
          { text: 'sport', id: 1 },
          { text: 'hookah', id: 2 },
          { text: 'jogging', id: 3 },
          { text: 'sleep', id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    
  };

  render() {
    const { activeQuestion, quiz } = this.state;
    const { question, answers } = this.state.quiz[0];
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all questions</h1>
          <ActiveQuiz
            question={question}
            answers={answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={quiz.length}
            answerNumber={activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}
