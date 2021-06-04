import React, { Component } from 'react';
import classes from './Drawer.module.css';

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
    return (
      <nav className={classes.Drawer}>
        <ul>{this.renderLinks()}</ul>
      </nav>
    );
  }
}
