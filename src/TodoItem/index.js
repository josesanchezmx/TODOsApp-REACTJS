import './TodoItem.css';
import { FiCheckCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
function TodoItem(props) {
    return (
        <li className="todo-item">
            <span className={`todo-item__check ${props.completed ? "todo-item__check--active" : ""}`}
            onClick={props.onComplete}>
                <FiCheckCircle className="todo-item__check-icon" />
            </span>
            <p className={`todo-item__text ${props.completed ? "todo-item__text--complete" : ""}`}>
                {props.text}
            </p>
            <span className="todo-item__delete" onClick={props.onDelete}>
            <RiDeleteBin6Line className="todo-item__delete-icon" />
            </span>
        </li>
    );
}

export { TodoItem };
