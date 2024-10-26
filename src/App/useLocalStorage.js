  import React from "react";
  
  // custom hooks
  function useLocalStorage (itemName, initialValue) {
  
    const localStorageItem = localStorage.getItem(itemName)

    let parsedItem;
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify([initialValue]));
      parsedItem = [initialValue];
  
    }else {
      parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);

  // funcion para actualice el estado y al localstorage
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
  
    setItem(newItem);
  }; 

  return [item,saveItem];
} 

export {useLocalStorage}