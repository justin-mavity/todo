import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todoItem = [
  {
    name: "",
    id: "",
    complete: false,
  },
];

function App() {
  const [todo, setTodo] = useState(todoItem);

  const handleItemToggle = (itemId) => {
    setTodo({
      todo: todo.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      }),
    });
  };

  const handleAddTodo = (itemName) => {
    const item = {
      name: itemName,
      id: todo.length,
      complete: false,
    };

    const newTodoList = [...todo, item];

    setTodo({
      todo: newTodoList,
    });
  };

  const clearCompleted = () => {
    const newTodoList = todo.filter((item) => {
      return !item.complete;
    });
    setTodo({
      todo: newTodoList,
    });
  };

  return (
    <div className="App">
      <div className="header">
        <h2>Welcome to your Todo App</h2>
        <TodoForm handleAddTodo={handleAddTodo} />
      </div>
      <TodoList
        todo={todo}
        handleItemToggle={handleItemToggle}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
