import React from 'react';
import './TodosLoading.css'; // Asegúrate de tener este archivo CSS

function TodosLoading() {
    return (
        <div className="loadingTodo-container">
            <span className='LoadingTodo-completeIcon'>
            </span>
            <span className='LoadingTodo-text'>
            </span>
            <span className='LoadingTodo-deleteIcon'>
                
            </span>
        </div>
    );
}

export { TodosLoading };

