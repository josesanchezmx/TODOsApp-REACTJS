import React from 'react'; // Usar useState directamente de React
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/*  aprenderemos a renderizar este array */
/* const defaultTodos = [ 
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Estudiar React.js', completed: true},
  {text: 'Ir al GYM a las 6', completed: true},
  {text: 'Meditar por la noche 10 minutos', completed: false},
  {text: 'Ir a por el chillon a la guarderia ', completed: false},
]; 
  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
  localStorage.removeItem('TODOS_V1') */

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];

  }else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos); // Se define el estado correctamente como defaultTodos
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length; // Se ajusta para contar el total de todos cuando es un array se usa la propiedad length para contar todos los  elemetos de ese array

  // Filtrando los todos según el valor de búsqueda
  const searchedTodos = todos.filter(todo => 
  todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ); 

  // funcion para actualice el estado y al localstorage
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1',JSON.stringify(newTodos));

    setTodos(newTodos);
  } 

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
    );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
  };

  return (
     <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} 
                    text={todo.text}
                    completed ={todo.completed} 
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}/>
        ))}
      </TodoList>

     <CreateTodoButton/>

     </React.Fragment>
    
  );
}

export default App;
