import React from 'react'; // Usar useState directamente de React
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
  
function App() {

  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  )
}

export default App;
