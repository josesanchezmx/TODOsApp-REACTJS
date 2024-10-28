import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider ({children}) {
    
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

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos, 
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}