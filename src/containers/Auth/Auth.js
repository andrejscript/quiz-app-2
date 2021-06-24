import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import is from 'is_js';

export default class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        placeholderDefault: 'example@mail.com',
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
        placeholderDefault: '******',
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

  loginHandler = () => {};

  registerHandler = () => {};

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
      isValid = is.email(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength;
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

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls,
      isFormValid,
    });
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((inputName, index) => {
      const control = this.state.formControls[inputName];

      return (
        <Input
          key={inputName + index}
          type={control.type}
          placeholder={control.placeholderDefault}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
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
            <Button
              type='success'
              disabled={!this.state.isFormValid}
              onClick={this.loginHandler}>
              Sign In
            </Button>
            <Button
              type='primary'
              disabled={!this.state.isFormValid}
              onClick={this.registerHandler}>
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
