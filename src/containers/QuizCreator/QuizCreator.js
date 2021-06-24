import React, { Component } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { createControl } from '../../form/formFramework';

function createOptionControl(number) {
  return createControl(
    {
      label: `${number}`,
      errorMessage: "The field can't be empty",
      id: number,
    },
    { required: true }
  );
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: {
      question: createControl(
        {
          label: 'Enter new question',
          errorMessage: "The field can't be empty",
        },
        { required: true }
      ),
      option1: createControl(1),
      option2: createControl(2),
      option3: createControl(3),
      option4: createControl(4),
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
