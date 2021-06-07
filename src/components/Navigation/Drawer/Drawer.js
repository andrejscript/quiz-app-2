import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import classes from './Drawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
  { to: '/', label: 'Quiz list', exact: true },
  { to: '/auth', label: 'Auth', exact: false },
  { to: '/quiz-creator', label: 'Create Quiz', exact: false },
];

export default class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} exact={link.exact} className={classes.active}>
            {link.label}
          </NavLink>
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
