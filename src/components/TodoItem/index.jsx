import React from "react";
import "./TodoItem.css";

export default function TodoItem({ value }) {
  return <li className="todo-item">{value}</li>;
}
