import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button'

export default class Auth extends Component {

  submitHandler = (e) => {
    e.preventDefault();
  }

  loginHandler = (e) => {
    console.log(`1:`, e);
  }
  
  registerHandler = (e) => {
    console.log(`2:`, e);
    
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>

          <h1>Auth</h1>

          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            <input type='text' />
            <input type='text' />
            <Button type='success' onClick={this.loginHandler}>Sign In</Button>
            <Button type='primary' onClick={this.registerHandler}>Sign Up</Button>
          </form>
        </div>
      </div>
    );
  }
}
