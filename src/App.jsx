import "./App.css";
import Input from "./components/Input-todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="conr1">
      <h1 className="t-app">Todo App</h1>

      <Input addTodo={addTodo} />

      <ul className="conr-li">
        {todos.map((todo) => (
          <li className="text-li" key={todo.id}>
            {todo.text}

            <i
              className="ri-delete-bin-5-fill trash"
              onClick={() => deleteTodo(todo.id)}
              style={{ cursor: "pointer" }}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
