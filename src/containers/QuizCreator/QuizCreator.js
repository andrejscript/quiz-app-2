import React, { Component } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import { createControl } from '../../form/formFramework';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

function createOptionControl(number) {
  return createControl(
    {
      label: `Option ${number}`,
      errorMessage: "The field can't be empty",
      id: number,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: 'Enter new question',
        errorMessage: "The field can't be empty",
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    rightAnswerId: 1,
    formControls: createFormControls(),
  };

  submitHandler = e => {
    e.preventDefault();
  };

  addQuestionHandler = () => {};

  createQuizHandler = () => {};

  changeHandler = (value, controlName) => {};

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, i) => {
      const control = this.state.formControls[controlName];

      return (
        <Auxiliary key={controlName + i}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={e => this.changeHandler(e.target.value, controlName)}
          />
          {i === 0 ? <hr /> : null}
        </Auxiliary>
      );
    });
  }

  render() {
    const Select = (
      <Select
        label='Choose right answer'
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
      />
    );
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Test creation</h1>

          <form onSubmit={this.submitHandler}>
            {this.renderControls()}
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
