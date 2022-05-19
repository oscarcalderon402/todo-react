import React from 'react';
import '../styles/createTodoButton.css';

const CreateTodoButton = ({ setOpenModal }) => {
  return (
    <button
      className="CreateTodoButton"
      style={{ zIndex: 100 }}
      onClick={() => setOpenModal((prev) => !prev)}
    >
      +
    </button>
  );
};

export default CreateTodoButton;
