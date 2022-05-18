import React from 'react';
import '../styles/TodoCounter.css';

const TodoCounter = ({ todos }) => {
  const completed = todos.reduce((sum, item) => {
    if (item.completed) {
      sum++;
    }
    return sum;
  }, 0);

  return (
    <h2 className="TodoCounter">{`has completado ${completed} de ${todos.length} TODO`}</h2>
  );
};

export default TodoCounter;
