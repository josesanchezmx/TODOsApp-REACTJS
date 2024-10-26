import React from 'react'; // Usar useState directamente de React
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

/*  aprenderemos a renderizar este array */

 /*localStorage.removeItem('TODOS_V1')
 const defaultTodos = [ 
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Estudiar React.js', completed: true},
  {text: 'Ir al GYM a las 6', completed: true},
  {text: 'Meditar por la noche 10 minutos', completed: false},
  {text: 'Ir a por el chillon a la guarderia ', completed: false},
]; 
  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
  */

  
function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,} = useLocalStorage('TODOS_V1', []); // Se define el estado correctamente como defaultTodos
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length; // Se ajusta para contar el total de todos cuando es un array se usa la propiedad length para contar todos los  elemetos de ese array

  // Filtrando los todos según el valor de búsqueda
  const searchedTodos = todos.filter(todo => 
  todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ); 

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
  return(
    <AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  )

}

export default App;
