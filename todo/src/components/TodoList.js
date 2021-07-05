import React from 'react';
//Component imports
import Todo from "./Todo"


const List = ({ todos, setTodos }) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                <Todo 
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
                todo={todo}
                />
                ))}
            </ul>
        </div>
    );
};

export default List;