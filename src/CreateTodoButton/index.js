import './CreateTodoButton.css';
import { MdOutlineAddTask } from "react-icons/md";

function CreateTodoButton({setOpenModal}) {
    return (
        <button className="create-todo-button"
        onClick={
            () => {
              setOpenModal(state => !state);
            }
          }
        ><MdOutlineAddTask className="create-todo-icon" /></button>
    );
}

export { CreateTodoButton };