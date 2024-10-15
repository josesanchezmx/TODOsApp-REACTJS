import React from 'react';
import './TodoSearch.css';
import { FaSearch } from "react-icons/fa"; // Importamos el icono

function TodoSearch({ searchValue, setSearchValue }) {
    
    const placeholders = [
        "Cortar Cebolla",
        "Comprar pan",
        "Estudiar React",
        "Pasear al perro",
        "Leer un libro"
    ];
    
    const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];

    return (
        <div className="todo-search"> {/* Contenedor para el input y el icono */}
            <FaSearch className="todo-search__icon" /> {/* Agregamos el icono de búsqueda aquí */}
            <input 
                className="todo-search__input" 
                placeholder={randomPlaceholder}
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }} 
            />
        </div>
    );
}

export { TodoSearch };
