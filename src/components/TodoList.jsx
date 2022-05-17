import React from 'react';
import '../styles/TodoList.css';

const TodoList = (props) => {
  return <div>{props.children}</div>;
};

export default TodoList;
