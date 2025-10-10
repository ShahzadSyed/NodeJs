import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above 👆</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
}

export default TodoList;
