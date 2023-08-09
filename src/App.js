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
  return (
    <React.Fragment>
      <TodoCounter completed={7} total={9} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
