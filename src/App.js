import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

/*  aprenderemos a renderizar este array */
const defaultTodos = [ 
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Estudiar React.js', completed: true},
  {text: 'Ir al GYM a las 6', completed: true},
  {text: 'Meditar por la noche 10 minutos', completed: false},
];

function App() {
  return (
     <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} 
                    text={todo.text}
                    completed ={todo.completed}  />
        ))}
      </TodoList>

     <CreateTodoButton/>

     </React.Fragment>
    
  );
}

export default App;
