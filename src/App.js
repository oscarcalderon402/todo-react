import React, { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import CreateTodoButton from './components/CreateTodoButton';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import Modal from './components/Modal';
import Form from './components/Form';

const defaultTodos = [
  { text: 'cortar cebolla 1', completed: true },
  { text: 'cortar cebolla 2', completed: false },
  { text: 'cortar cebolla 3', completed: false },
];

function App() {
  // const [todos, setTodos] = useState(defaultTodos);
  const [search, setSearch] = useState('');
  const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
  const [openModal, setOpenModal] = useState(false);
  let todoSeach = [];

  if (!search.length >= 1) {
    todoSeach = todos;
  } else {
    todoSeach = todos.filter((todo) => {
      const textValue = todo.text.toLowerCase();
      const searchText = search.toLowerCase();

      return textValue.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const index = todos.findIndex((todo) => todo.text === text);
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed;
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodo));
  };

  const deleteTodo = (text) => {
    const newTodo = todos.filter((todo) => todo.text !== text);

    localStorage.setItem('TODOS_V1', JSON.stringify(newTodo));
  };
  return (
    <>
      <TodoCounter todos={todos} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {todoSeach.map((todo) => {
          return (
            <TodoItem
              text={todo.text}
              completed={todo.completed}
              key={todo.text}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          );
        })}
        {openModal && (
          <Modal>
            <Form setOpenModal={setOpenModal} setTodos={setTodos} />
          </Modal>
        )}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
