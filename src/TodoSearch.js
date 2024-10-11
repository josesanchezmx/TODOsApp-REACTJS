import './TodoSearch.css';

function TodoSearch() {
    const placeholders = [
        "Cortar Cebolla",
        "Comprar pan",
        "Estudiar React",
        "Pasear al perro",
        "Leer un libro"
    ];
    
    const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];

    return (
        <input className="todo-search__input" placeholder={randomPlaceholder} />
    );
}

export { TodoSearch };

