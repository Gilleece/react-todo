import React from 'react';
//Component imports
import Todo from "./Todo"


const List = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                <Todo 
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
                todo={todo}
                filteredTodos={filteredTodos}                
                />
                ))}
            </ul>
        </div>
    );
};

export default List;