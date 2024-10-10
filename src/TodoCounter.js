/* recibe parametros(objetos para que sea dinamico) */
function TodoCounter( {total, completed})  {
    return(
        <h1>
            Has completado {completed} de {total} TODOS
        </h1>
    );
}
export { TodoCounter };
