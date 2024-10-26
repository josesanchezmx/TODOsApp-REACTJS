import './CreateTodoButton.css';
import { MdOutlineAddTask } from "react-icons/md";

function CreateTodoButton() {
    return (
        <button className="create-todo-button"
        onClick={
            (event) => {
                console.log('le diste click')
            }
                
        }
        ><MdOutlineAddTask className="create-todo-icon" /></button>
    );
}

export { CreateTodoButton };