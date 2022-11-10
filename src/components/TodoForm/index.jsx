import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import TodoItem from "../TodoItem";
import "./TodoForm.css";

export default function TodoForm() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputText) return;
    const newTodos = [...todos, { text: inputText }];
    setTodos(newTodos);
    setInputText("");
  }

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <Input value={inputText} handleChange={handleChange} />
        <Button />
      </form>
      <div className="todo-item-container">
        {todos.map((todo) => (
          <TodoItem key={todo.text} value={todo.text} />
        ))}
      </div>
    </div>
  );
}
