import React from 'react';
import classes from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import QuizList from '../../containers/QuizList/QuizList';

const FinishedQuiz = ({ quiz, results, onRetest }) => {
  const successCount = Object.values(results).filter(i => i === 'success')
    .length;

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {quiz.map((quizItem, index) => {
          console.log();
          const cls = [
            'fa',
            results[quizItem.id] === 'wrong' ? 'fa-times' : 'fa-check',
            classes[results[quizItem.id]],
          ];

          return (
            <li key={quizItem.id}>
              <strong>{index + 1}. </strong>
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          );
        })}
      </ul>

      <p>
        Right {successCount} from {quiz.length}
      </p>
      <Button onClick={onRetest} type='primary'>
        Repeat
      </Button>

      <Link to='/'>
        <Button onRetest={onRetest} type='success'>
          Test list
        </Button>
      </Link>
    </div>
  );
};

export default FinishedQuiz;
