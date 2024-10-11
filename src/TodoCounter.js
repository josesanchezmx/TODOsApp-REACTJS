import './TodoCounter.css';

/* recibe parámetros (objetos para que sea dinámico) */
function TodoCounter({ total, completed }) {
    return (
        <>
            <p className="todo-counter__title">
                Has completado
            </p>
            <p className="todo-counter__subtitle">
            <span>{completed}</span> de <span>{total}</span> TODOs
            </p>
        </>
    );
}

export { TodoCounter };
