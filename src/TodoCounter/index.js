import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

/* recibe parámetros (objetos para que sea dinámico) */
function TodoCounter() {
    const {
        completedTodos, 
        totalTodos,
        searchedTodos, // Importamos searchedTodos del contexto
    } = React.useContext(TodoContext);

    if (searchedTodos.length === 0 && totalTodos > 0) {
        return (
            <>
                <p className="todo-counter__title">
                    ¡Oops!
                </p>
                <p className="todo-counter__subtitle">
                    El TODO que buscas no existe. Intenta con otro término. 🔍
                </p>
            </>
        );
    } else if (completedTodos !== totalTodos) {
        return (
            <>
                <p className="todo-counter__title">
                    Has completado
                </p>
                <p className="todo-counter__subtitle">
                    <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
                </p>
            </>
        );  
    } else if (totalTodos === 0) {
        return (
            <>
                <p className="todo-counter__title">
                    ¡Parece que no tienes TODOs todavía! 🎉
                </p>
                <p className="todo-counter__subtitle">
                    ¡Agrega algunos y comienza a cumplir tus metas! 🚀
                </p>
            </>
        );
    } else {
        return (
            <>
                <p className="todo-counter__title">
                    Felicidades, ¡eres bien chingón!
                </p>
                <p className="todo-counter__subtitle">
                    Completaste todos los TODOs 🙈🥵🔥
                </p>
                {/* <p className="todo-counter__subtitle">
                    Ya no tienes nada pendiente 🙌😎
                </p> */}
            </>
        );
    }
}

export { TodoCounter };

