import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = ({ quiz, results, onRetest }) => {
  const successCount = Object.values(results).filter(
    i => i === 'success'
  ).length;

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

      <button onClick={onRetest}>Repeat the test</button>
    </div>
  );
};

export default FinishedQuiz;
