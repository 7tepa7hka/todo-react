import { useState } from "react";
import style from "./Input-todo.module.css";

function Input({ addTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") {
      alert("добавьте пожалуйста не пустой Todo");
      return;
    }

    addTodo(input);
    setInput("");
  };

  return (
    <div className={style.mconr1}>
      <input
        className={style.inp}
        placeholder="Добавьте свой Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className={style.btn} onClick={handleAdd}>
        <p className={style.add}>Add</p>
      </button>
    </div>
  );
}

export default Input;
