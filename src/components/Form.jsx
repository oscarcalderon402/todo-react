import React, { useState } from 'react';
import '../styles/Form.css';

const Form = ({ setOpenModal, setTodos }) => {
  const [newTodoValue, setNewTodoValue] = useState('');

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // if (newTodoValue.trim() === '') {
    //   return;
    // }

    const newTodo = {
      text: newTodoValue.trim(),
      completed: false,
    };

    setTodos([newTodo]);
    setOpenModal(false);
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value={newTodoValue}
        onChange={(e) => onChange(e)}
        placeholder="Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
};

export default Form;
