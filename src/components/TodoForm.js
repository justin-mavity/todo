import React, { useState } from "react";

export default function TodoForm(props) {
  const [todo, setTodo] = useState("");

  const onChange = (e) => {
    setTodo({
      todo: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.handleAddTodo(todo);
    setTodo({
      todo: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value="todo" onChange={onChange} name="item" />
      <button>Add</button>
    </form>
  );
}
