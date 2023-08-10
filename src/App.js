import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'cocinar guayabas', completed: true },
  { text: 'colar guayabas', completed: false },
  { text: 'triturar guayabas', completed: false },
  { text: 'enfriar guayabas', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodo = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  console.log(searchValue);
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodo} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
