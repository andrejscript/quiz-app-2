import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends Component {
  state = {
    formControl: {
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

  renderInputs() {
    return Object.keys(this.state.formControl).map((controlName, index) => {
      const control = this.state.formControl[controlName];
      return <Input key={controlName + index} type={control} />;
    });
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Auth</h1>

          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {this.renderInputs()}

            <Input label='Email' />
            <Input label='Password' />
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
