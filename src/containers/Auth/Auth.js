import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends Component {

  state = {

  }
  
  submitHandler = e => {
    e.preventDefault();
  };

  loginHandler = e => {
    console.log(`1:`, e);
  };

  registerHandler = e => {
    console.log(`2:`, e);
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Auth</h1>

          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
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
