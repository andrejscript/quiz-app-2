import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import classes from './AnswerList.module.css';

const AnswerList = props => {
  //const {
    
  //} = props;
  return (
   <div className={classes.AnswerList}>
   
   <AnswerItem />
   
   </div>
  );
};
  
export default AnswerList;