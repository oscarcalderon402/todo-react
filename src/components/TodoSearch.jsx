import React from 'react';
import '../styles/TodoSearch.css';
const TodoSearch = ({ search, setSearch }) => {
  const handlechange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="cebolla"
      value={search}
      onChange={(e) => handlechange(e)}
    />
  );
};

export default TodoSearch;
