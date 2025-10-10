import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/todos");
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <TodoInput fetchTodos={fetchTodos} />
      {todos.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No tasks yet.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
        ))
      )}
    </div>
  );
}

export default TodoList;
