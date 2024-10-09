import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


function App() {
  return (
    <div className="App"> 
      <TodoCounter />
      <TodoSearch />
      <TodoList>

      {/* mandamos a llamar el elemento TodoItem insertamos un componente de react en otro elemento de react */}
      <TodoItem />
      <TodoItem />
      <TodoItem />
      </TodoList>

     <CreateTodoButton/> 

    </div>
  );
}

export default App;
