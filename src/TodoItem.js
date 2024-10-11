import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="todo-item">
            <span className={`todo-item__check ${props.completed ? "todo-item__check--active" : ""}`}>
                ✔
            </span>
            <p className={`todo-item__text ${props.completed ? "todo-item__text--complete" : ""}`}>
                {props.text}
            </p>
            <span className="todo-item__delete">X</span>
        </li>
    );
}

export { TodoItem };
