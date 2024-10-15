import './TodoCounter.css';

/* recibe parámetros (objetos para que sea dinámico) */
function TodoCounter({ total, completed }) {
    if (completed !== total) {
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
    }else if(total === 0){
        return (
            <>
                <p className="todo-counter__title">
                    ¡Parece que no tienes TODOs todavía! 🎉
                </p>
                <p className="todo-counter__subtitle">
                    ¡Agrega algunos y comienza a cumplir tus metas! 🚀
                </p>
            </>
        )
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
