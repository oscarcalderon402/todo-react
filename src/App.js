import CreateTodoButton from './components/CreateTodoButton';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

function App() {
  const todos = [
    { text: 'cortar cebolla 1', completed: false },
    { text: 'cortar cebolla 2', completed: false },
    { text: 'cortar cebolla 3', completed: false },
  ];
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => {
          return <TodoItem text={todo.text} key={todo.text} />;
        })}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
