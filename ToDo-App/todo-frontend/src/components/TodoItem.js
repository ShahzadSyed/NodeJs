import React from "react";
import axios from "axios";

function TodoItem({ todo, fetchTodos }) {
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err.message);
    }
  };

  return (
    <div style={styles.item}>
      <span style={styles.text}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo._id)} style={styles.deleteBtn}>
        ✖
      </button>
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: "10px 14px",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  },
  text: {
    fontSize: "15px",
    color: "#333",
  },
  deleteBtn: {
    backgroundColor: "#ff5f5f",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    cursor: "pointer",
    fontSize: "14px",
    lineHeight: "0",
  },
};

export default TodoItem;
