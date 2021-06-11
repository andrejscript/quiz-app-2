import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

export default class Quiz extends Component {
  state = {
    questionCounter: 0,
    answerStatus: null, //{[id]: 'success'/'wrong'}
    isFinished: false,
    results: {},
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
      // {
      //   question: 'What is your hobby?',
      //   id: 4,
      //   rightAnswer: 3,
      //   answers: [
      //     { text: 'Sport', id: 1 },
      //     { text: 'Cooking', id: 2 },
      //     { text: 'Travelling', id: 3 },
      //     { text: 'Pets', id: 4 },
      //   ],
      // },
    ],
  };

  onAnswerClickHandler = answerId => {
    const { questionCounter, quiz } = this.state,
      activeQuestion = quiz[questionCounter];

    // Multiple click checking
    if (this.state.answerStatus) {
      return;
    }

    // Finish Quiz cheching

    if (activeQuestion.rightAnswer === answerId) {
      const results = activeQuestion.id;
      this.setState(state => ({
        answerStatus: { ...state.answerStatus, [answerId]: 'success' },
        results: { ...state.results, [results]: 'success' },
      }));
    } else {
      const results = activeQuestion.id;
      this.setState(state => ({
        answerStatus: { ...state.answerStatus, [answerId]: 'wrong' },
        results: { ...state.results, [results]: 'wrong' },
      }));
    }
    this.goNextQuestion();
    if (this.isQuizFinished()) {
      this.setState({ isFinished: true });
    }
  };

  goNextQuestion = () => {
    // Setting a timeout between checking responses
    const timeout = window.setTimeout(() => {
      this.setState(prevState => ({
        questionCounter: prevState.questionCounter + 1,
        answerStatus: null,
      }));

      window.clearTimeout(timeout);
    }, 600);
  };

  isQuizFinished() {
    return this.state.questionCounter + 1 === this.state.quiz.length;
  }

  retestHandler = () => {
    this.setState({
      questionCounter: 0,
      answerStatus: null, //{[id]: 'success'/'wrong'}
      isFinished: false,
      results: {},
    });
  };

  componentDidMount() {
    console.log(this.props.match);
    console.log(`Quiz ID =`, this.props.match.params.id);
  }

  render() {
    const {
      quiz,
      questionCounter,
      answerStatus,
      isFinished,
      results,
    } = this.state;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          {isFinished ? (
            <>
              <h1>Results</h1>
              <FinishedQuiz
                results={results}
                quiz={quiz}
                onRetest={this.retestHandler}
              />
            </>
          ) : (
            <>
              <h1>Answer all the questions</h1>
              <ActiveQuiz
                quiz={quiz}
                activeAnswers={quiz[questionCounter].answers}
                activeQuizNumber={quiz[questionCounter].id}
                question={quiz[questionCounter].question}
                answerStatus={answerStatus}
                onAnswerClick={this.onAnswerClickHandler}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}
