import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios/axios-quiz';

export default class Quiz extends Component {
  state = {
    questionCounter: 0,
    answerStatus: null, //{[id]: 'success'/'wrong'}
    isFinished: false,
    results: {},
    quiz: [],
    loading: true,
  };

  onAnswerClickHandler = answerId => {
    const { questionCounter, quiz } = this.state,
      activeQuestion = quiz[questionCounter];

    console.log(answerId);
    console.log(activeQuestion.rightAnswerId);
    // Multiple click checking
    if (this.state.answerStatus) {
      return;
    }

    // Finish Quiz cheching

    if (activeQuestion.rightAnswerId === answerId) {
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

  async componentDidMount() {
    try {
      const response = await axios.get(
        `/quizes/${this.props.match.params.id}.json`
      );
      const quiz = response.data;
      console.log(quiz);
      this.setState({ quiz, loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    // console.log(this.state.answerStatus);
    const {
      quiz,
      questionCounter,
      answerStatus,
      isFinished,
      results,
      loading,
    } = this.state;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          {loading ? (
            <Loader />
          ) : isFinished ? (
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
