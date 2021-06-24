import React, { Component } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: {
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
    },
  };

  sibmitHandler = e => {
    e.preventDefault();
  };

  addQuestionHandler = () => {};

  createQuizHandler = () => {};

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Test creation</h1>

          <form onSubmit={this.submitHandler}>
            <input type='text' />
            <hr />
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <select></select>

            <Button type='primary' onClick={this.addQuestionHandler}>
              Add question
            </Button>

            <Button type='success' onClick={this.createQuizHandler}>
              Create test
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
