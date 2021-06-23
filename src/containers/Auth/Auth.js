import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends Component {
  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Enter correct email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Enter correct password',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  submitHandler = e => {
    e.preventDefault();
  };

  loginHandler = e => {
    console.log(`1:`, e);
  };

  registerHandler = e => {
    console.log(`2:`, e);
  };

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
    }

    if (validation.email) {
    }

    if (validation.minLength) {
    }

    return isValid;
  }

  onChangeHandler = (e, inputName) => {
    console.log(inputName, e.target.value);

    const formControls = { ...this.state.formControls };
    const control = { ...formControls[inputName] };

    control.value = e.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[inputName] = control;

    this.setState({
      formControls,
    });
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((inputName, index) => {
      const control = this.state.formControls[inputName];

      return (
        <Input
          key={inputName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={e => this.onChangeHandler(e, inputName)}
        />
      );
    });
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Auth</h1>

          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {this.renderInputs()}
            <Button type='success' onClick={this.loginHandler}>
              Sign In
            </Button>
            <Button type='primary' onClick={this.registerHandler}>
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
