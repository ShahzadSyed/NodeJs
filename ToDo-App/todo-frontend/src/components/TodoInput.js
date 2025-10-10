import React, { useState } from "react";
import axios from "axios";

function TodoInput({ fetchTodos }) {
  const [text, setText] = useState("");

  const addTodo = async () => {
    if (!text.trim()) return;
    try {
      await axios.post("http://localhost:5000/api/todos", { text });
      setText("");
      fetchTodos();
    } catch (err) {
      console.error("Error adding todo:", err.message);
    }
  };

  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        style={styles.input}
      />
      <button onClick={addTodo} style={styles.button}>
        Add
      </button>
    </div>
  );
}

const styles = {
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "15px",
  },
  button: {
    backgroundColor: "#4facfe",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
    transition: "0.3s",
  },
};

export default TodoInput;
