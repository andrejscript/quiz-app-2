import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import classes from './Drawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [1, 2, 3];

export default class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          {' '}
          <a>Link {link}</a>
        </li>
      );
    });
  }

  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <>
        <nav className={cls.join(' ')}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onToggle={this.props.onToggle} /> : null}
      </>
    );
  }
}
