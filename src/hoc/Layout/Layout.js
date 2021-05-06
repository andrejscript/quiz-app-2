import React, { Component } from 'react';
import classes from './Layout.module.css';
   
export default class Layout extends Component {
   
render() {
  
  return (  
    <div className={classes.Layout}>
      <main>{this.props.children}</main>



      {
        <a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>

      }
    </div>
    
    );
  }
}