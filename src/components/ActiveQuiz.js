import React from 'react';
import AnswerList from './AnswerList/AnswerList';
import classes from './ActiveQuiz.module.css';

const ActiveQuiz = props => {
  const {
    quiz,
    question
  } = props;

  console.log(question);
  
  return (
   <div className={classes.ActiveQuiz}>
       <p className={classes.Question}>
        <span>
          <strong>{question.id} </strong> 
          {question}
        </span>

        <small>
          {question.id} from {quiz.length}
        </small>
      </p>
   
   <AnswerList quiz={quiz}/>
   </div>
  );
};
  
export default ActiveQuiz;