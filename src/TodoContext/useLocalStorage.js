import React from "react";

// Custom Hook
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([initialValue]));
          parsedItem = [initialValue];
          setItem(parsedItem); // Establecer el valor inicial
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem); // Cargar el valor existente
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000); // Retraso de 3 segundos

    // Limpiar el temporizador al desmontar
    return () => clearTimeout(timer);
  }, [itemName, initialValue]); // Incluir dependencias 

  // Función para actualizar el estado y el localStorage
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };


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
