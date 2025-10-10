import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>📝 My To-Do App</h1>
        <TodoList />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
  },
  container: {
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "25px 20px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
};

export default App;
